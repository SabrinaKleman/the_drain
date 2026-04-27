import PaintingDetail from "@/components/PaintingDetail";

export default function Airplane() {
  return (
    <PaintingDetail
      title="Airplane"
      year="2023"
      medium="Oil on canvas"
      dimensions='18" × 24"'
      image="/images/airplane.png"
      statement="Every few minutes, one passes overhead. You stop noticing after a while — hundreds of people in a metal tube punching through the sky at 500 miles per hour becomes background noise. This painting tries to give that moment back its strangeness. Just the plane. Just the fact of it."
    />
  );
}
