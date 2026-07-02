import PaintingDetail from "@/components/PaintingDetail";

export default function TVInTheLand() {
  return (
    <PaintingDetail
      title="The Television Landscape"
      year="2025"
      medium="Oil on canvas"
      dimensions='30" × 40"'
      image="/images/tvinland.jpeg"
    statement={
  <>
    <p>
      <strong>Description (Intellectuals):</strong> Hopscotching the intersections of technology, nature, religion and the Italian Renaissance...
    </p>
    <br />
    <p>
      <strong>Description (Common):</strong> The painting is trippy, very trippy, man...
    </p>
    <br />
    <p>
      <strong>Description (Buyer - rich):</strong> A poll of bankers, lawyers and titans of finance agree...
    </p>
    <br />
    <p>
      <strong>Description (Buyer - poor):</strong> N/A
    </p>
  </>
}/>
  );
}
