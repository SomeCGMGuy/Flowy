const releaseVersion = document.querySelector('#release-version');
const releaseMeta = document.querySelector('#release-meta');
const releaseNote = document.querySelector('#release-note');
const downloadLink = document.querySelector('#apk-download');
const downloadLabel = document.querySelector('#download-label');

async function loadRelease() {
  try {
    const response = await fetch('./release.json', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Release config could not be loaded (${response.status})`);
    }

    const release = await response.json();
    const canDownload = Boolean(
      release.available &&
      release.version &&
      release.downloadUrl
    );

    if (!canDownload) {
      if (release.note) {
        releaseNote.textContent = release.note;
      }
      return;
    }

    releaseVersion.textContent = `Version ${release.version}`;

    const meta = [
      release.fileSize || null,
      release.minAndroid ? `Android ${release.minAndroid}+` : null,
    ].filter(Boolean);

    releaseMeta.textContent = meta.length ? meta.join(' · ') : 'Android APK';
    releaseNote.textContent = release.note || 'Direkter Download der freigegebenen Android-Version.';

    downloadLink.href = release.downloadUrl;
    downloadLink.removeAttribute('aria-disabled');
    downloadLink.classList.remove('is-disabled');
    downloadLink.setAttribute('download', '');
    downloadLabel.textContent = 'APK herunterladen';
  } catch (error) {
    console.warn('[flowy] Release-Konfiguration nicht verfügbar.', error);
  }
}

loadRelease();
