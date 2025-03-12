import { Timeline } from "@/components/timeline/Timeline"

// Tijdlijn items voor de EU AI Act
const timelineItems = [
  {
    id: "1",
    title: "Publicatie EU AI Act",
    date: "12 juli 2024",
    description: "De EU AI Act is gepubliceerd in het Official Journal of the European Union.",
    iconFallback: "📄",
    iconColor: "bg-blue-600",
    details: [
      "Eerste uitgebreide AI-wetgeving ter wereld",
      "Risicogebaseerde benadering voor AI-systemen",
      "Doel: veilige en betrouwbare AI bevorderen",
      "Bescherming van fundamentele rechten"
    ]
  },
  {
    id: "2",
    title: "Inwerkingtreding",
    date: "2 augustus 2024",
    description: "De EU AI Act treedt in werking, maar de verplichtingen en handhavingsbepalingen zijn nog niet van kracht.",
    iconFallback: "⚖️",
    iconColor: "bg-blue-500",
    details: [
      "Officiële start van de EU AI Act",
      "Verplichtingen nog niet van kracht (Art. 113)",
      "Begin van voorbereidingsperiode voor bedrijven",
      "Start van ontwikkeling van richtsnoeren"
    ]
  },
  {
    id: "3",
    title: "AI-geletterdheid & Verboden AI-systemen",
    date: "2 februari 2025",
    description: "Verplichtingen voor AI-geletterdheid en verboden AI-systemen treden in werking.",
    iconFallback: "🎓",
    iconColor: "bg-green-600",
    details: [
      "Verplichtingen voor training en bewustwording",
      "Verbod op AI-systemen met onaanvaardbare risico's",
      "Verbod op sociale scoring door overheden",
      "Verbod op biometrische categorisatie op basis van gevoelige kenmerken",
      "Verbod op emotieherkenning op werkplekken en onderwijsinstellingen",
      "Artikel 4 en 113 worden van kracht",
      "Focus op kennis en vaardigheden voor AI-gebruik"
    ]
  },
  {
    id: "4",
    title: "Publicatie AI-modellen",
    date: "2 mei 2025",
    description: "Het Europees AI-bureau moet praktijkcodes publiceren voor algemene AI-modellen.",
    iconFallback: "📋",
    iconColor: "bg-blue-500",
    details: [
      "Praktijkcodes voor algemene AI-modellen",
      "Richtlijnen voor ontwikkelaars",
      "Artikel 56(9) wordt van kracht",
      "Standaarden voor transparantie en veiligheid"
    ]
  },
  {
    id: "5",
    title: "Handhaving GPAI-modellen",
    date: "2 augustus 2025",
    description: "Verplichtingen voor algemene AI-modellen (GPAI) treden in werking en het hoofdstuk over sancties wordt van kracht.",
    iconFallback: "🔍",
    iconColor: "bg-blue-600",
    details: [
      "Verplichtingen voor GPAI-modellen",
      "Hoofdstuk over sancties wordt van kracht",
      "Artikel 56(9) en 101 worden geactiveerd",
      "Start van handhaving voor grote AI-modellen"
    ]
  },
  {
    id: "6",
    title: "Implementatie Hoog-Risico AI",
    date: "2 februari 2026",
    description: "De Europese Commissie moet een implementatiehandleiding aannemen voor hoog-risico AI-systemen.",
    iconFallback: "⚠️",
    iconColor: "bg-blue-700",
    details: [
      "Implementatiehandleiding voor hoog-risico AI",
      "Richtlijnen voor post-market monitoring",
      "Artikel 72 wordt van kracht",
      "Classificatieregels voor hoog-risico AI-systemen"
    ]
  },
  {
    id: "7",
    title: "Sancties en Handhaving",
    date: "2 augustus 2026",
    description: "Lidstaten moeten regels implementeren voor sancties en andere handhavingsmaatregelen.",
    iconFallback: "🚫",
    iconColor: "bg-blue-800",
    details: [
      "Implementatie van sancties door lidstaten",
      "Handhavingsmaatregelen worden geactiveerd",
      "Artikel 99 wordt van kracht",
      "Overige bepalingen van de wet treden in werking"
    ]
  },
  {
    id: "8",
    title: "Volledige Handhaving",
    date: "2 augustus 2027",
    description: "Volledige handhaving van de EU AI Act voor gereguleerde hoog-risico AI-systemen.",
    iconFallback: "✅",
    iconColor: "bg-blue-900",
    details: [
      "Volledige handhaving voor hoog-risico AI-systemen",
      "Verplichtingen voor gereguleerde systemen",
      "Markttoezicht volledig operationeel",
      "Bedrijven moeten volledig compliant zijn"
    ]
  },
  {
    id: "9",
    title: "Deadline Compliance",
    date: "31 december 2030",
    description: "Uiterste deadline voor compliance voor AI-systemen die vóór 2 augustus 2027 op de markt zijn gebracht.",
    iconFallback: "🏁",
    iconColor: "bg-blue-500",
    details: [
      "Uiterste deadline voor oudere AI-systemen",
      "Alle systemen moeten compliant zijn",
      "Artikel 111(1) wordt volledig gehandhaafd",
      "Geen uitzonderingen meer voor bestaande systemen"
    ]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-6">
      <div className="w-full px-2 sm:px-4 relative z-10">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2 text-blue-800">
            EU AI Act: Belangrijke Data voor Compliance
          </h1>
          
          <p className="text-blue-700 max-w-3xl mx-auto">
            De EU AI Act is formeel aangenomen en het aftellen naar de start van de handhaving is begonnen.
            Hier zijn de belangrijke data die u moet kennen voor uw compliance roadmap.
          </p>
        </header>
        
        <Timeline items={timelineItems} className="mt-4" />
      </div>
    </main>
  )
}
