# Natuurlijke Tijdlijn Project

Een interactieve tijdlijn met een natuurthema gebouwd met Next.js en shadcn UI. Dit project toont de seizoenen en veranderingen in de natuur gedurende het jaar.

## Functies

- Responsieve tijdlijn component met natuurthema
- Animaties en interactieve elementen
- Gedetailleerde informatie over elk seizoen
- Volledig aanpasbaar voor verschillende tijdlijngegevens
- **Downloadfunctie** - Download de tijdlijn als afbeelding of PDF

## Technologieën

- [Next.js](https://nextjs.org/) - React framework
- [shadcn UI](https://ui.shadcn.com/) - UI componenten
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type veiligheid
- [html2canvas](https://html2canvas.hertzen.com/) - Voor het maken van screenshots
- [jsPDF](https://parall.ax/products/jspdf) - Voor het genereren van PDF's

## Aan de slag

### Vereisten

- Node.js 18.0.0 of hoger
- npm of yarn

### Installatie

1. Clone de repository:
```bash
git clone https://github.com/yourusername/timeline-project.git
cd timeline-project
```

2. Installeer de dependencies:
```bash
npm install
# of
yarn install
```

3. Start de ontwikkelingsserver:
```bash
npm run dev
# of
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in je browser om de applicatie te bekijken.

## Aanpassen

### Tijdlijngegevens wijzigen

Om de tijdlijngegevens aan te passen, bewerk je het `timelineItems` array in `app/page.tsx`. Elk item heeft de volgende structuur:

```typescript
{
  id: string;
  title: string;
  date: string;
  description: string;
  iconFallback?: string;
  iconColor?: string;
  details?: string[];
}
```

### Downloadfunctie gebruiken

De tijdlijn component heeft ingebouwde downloadfuncties:

```typescript
// Toon of verberg downloadknoppen
<Timeline items={timelineItems} showDownloadButtons={true} />
```

Je kunt de downloadknoppen verbergen door `showDownloadButtons` op `false` te zetten.

### Stijlen aanpassen

De stijlen kunnen worden aangepast in:
- `app/globals.css` - Globale stijlen en animaties
- `components/timeline/Timeline.tsx` - Tijdlijn component stijlen

## Licentie

Dit project is gelicenseerd onder de MIT-licentie.

## Erkenningen

- Natuurthema-inspiratie uit verschillende seizoenen
- shadcn UI voor de basiscomponenten
- Next.js team voor het geweldige framework
