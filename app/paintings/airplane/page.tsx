import PaintingDetail from "@/components/PaintingDetail";

export default function Airplane() {
  return (
    <PaintingDetail
      title="The Lamentation of St. Gabriel’s Crucifixion’s Annunciation - High Def"
      year="2026"
      medium="Oil on canvas"
      dimensions='18" × 24"'
      image="/images/airplane.jpg"
      description={
    <>
      {/* your content here */}
    </>
  }
    extraImages={[
    "/images/airplane2.jpeg",
  ]}/>
  );
}


