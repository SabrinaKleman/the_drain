import PaintingDetail from "@/components/PaintingDetail";

export default function Computer() {
  return (
    <PaintingDetail
      title="Computer"
      year="2024"
      medium="Acrylic on panel"
      dimensions='10" × 10"'
      image="/images/computer.jpeg"
      statement="Painted from memory rather than reference, which meant the proportions drifted and details dissolved. That felt right. Our relationship to computers is not really visual anymore — it's haptic, ambient, total. What's left when you try to picture one is mostly a feeling of being inside something that has no outside."
    />
  );
}
