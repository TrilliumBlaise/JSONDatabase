const audioContext = new AudioContext();

const NOTE_DETAILS = [
  { note: 'C', key: 'z', frequency: 261.626, active: false },
  { note: 'Db', key: 's', frequency: 277.183, active: false },
  { note: 'D', key: 'x', frequency: 293.665, active: false },
  { note: 'Eb', key: 'd', frequency: 311.127, active: false },
  { note: 'E', key: 'c', frequency: 329.628, active: false },
  { note: 'F', key: 'v', frequency: 349.228, active: false },
  { note: 'Gb', key: 'g', frequency: 369.994, active: false },
  { note: 'G', key: 'b', frequency: 391.995, active: false },
  { note: 'Ab', key: 'h', frequency: 415.305, active: false },
  { note: 'A', key: 'n', frequency: 440, active: false },
  { note: 'Bb', key: 'j', frequency: 466.164, active: false },
  { note: 'B', key: 'm', frequency: 493.883, active: false },
];

document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const noteDetail = getNoteDetail(e.key);
  if (noteDetail == null) return;
  noteDetail.active = true;
  playNotes(noteDetail);
});

document.addEventListener('keyup', e => {
  const noteDetail = getNoteDetail(e.key);
  if (noteDetail == null) return;
  noteDetail.active = false;
  playNotes(noteDetail);
});

function getNoteDetail(keyboardKey) {
  return NOTE_DETAILS.find(n => `${n.key}` === keyboardKey);
}

function playNotes(noteDetail) {
  NOTE_DETAILS.forEach(n => {
    const key = document.querySelector(`[data-note= '${n.note}']`);
    key.classList.toggle('active', n.active);
    if (n.oscillator != null) {
      n.oscillator.stop();
      n.oscillator.disconnect();
    }
  });
  const activeNotes = NOTE_DETAILS.filter(n => n.active);
  const gain = 1 / activeNotes.length;
  activeNotes.forEach(n => {
    startNote(n, gain);
  });
}

function startNote(noteDetail, gain) {
  const gainNode = audioContext.createGain();
  gainNode.gain.value = gain;
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.value = noteDetail.frequency;
  oscillator.type = 'sine';
  oscillator.connect(gainNode).connect(audioContext.destination);
  oscillator.start();
  noteDetail.oscillator = oscillator;
}
