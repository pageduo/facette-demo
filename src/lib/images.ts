// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
// Jede Bild-ID wurde einzeln heruntergeladen und visuell geprüft (Inhalt passt zur
// Bildunterschrift, keine fremden Firmenlogos/Wahrzeichen sichtbar), bevor sie hier
// eingetragen wurde. Für den echten Kundenbetrieb durch eigene / beauftragte
// Fotografie ersetzen.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  // Dunkle, violett-blaue Verlaufswelle — Basis für den Hero-Hintergrund hinter
  // den animierten Farbverlaufsflächen.
  hero: unsplash("1620121692029-d088224ddc74", 2400),
  // Farbtinte im Wasser — steht sinnbildlich für "eine Marke, viele Facetten"
  // und wird als OG-Bild sowie im Prozessschritt "Weiterdenken" wiederverwendet.
  ink: unsplash("1541701494587-cb58502866ab", 2000),

  work: {
    nordkorn: unsplash("1509440159596-0249088772ff"),
    "pulse-radio": unsplash("1470225620780-dba8ba36b745"),
    voltra: unsplash("1593941707882-a5bba14938c7"),
    "muse-cosmetics": unsplash("1596462502278-27bfdc403348"),
    hafenkantine: unsplash("1517248135467-4c7edcad34c4"),
    gruenwerk: unsplash("1523348837708-15d4a09cfac2"),
  } as Record<string, string>,

  studio: unsplash("1552664730-d307ca884978", 1800),

  process: [
    // 01 Entdecken — Workshop-Runde vor der Ideenwand.
    unsplash("1552664730-d307ca884978"),
    // 02 Entwerfen — Farbstudie in Acryl, mehrere Richtungen parallel.
    unsplash("1541961017774-22349e4a1262"),
    // 03 Verdichten — Notizen und Feinschliff.
    unsplash("1517842645767-c639042777db"),
    // 04 Ausrollen — Präsentation vor dem Team.
    unsplash("1556761175-5973dc0f32e7"),
    // 05 Weiterdenken — Wiederverwendung des Tinte-Motivs: die Marke bleibt in Bewegung.
    unsplash("1541701494587-cb58502866ab"),
  ],

  testimonialAvatars: {
    mareike: unsplash("1494790108377-be9c29b29330", 200),
    jonas: unsplash("1573497019940-1c28c88b4f3e", 200),
    elin: unsplash("1560250097-0b93528c311a", 200),
  } as Record<string, string>,
};
