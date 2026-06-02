import PaintingDetail from "@/components/PaintingDetail";

export default function Computer() {
  return (
    <PaintingDetail
      title="Computer"
      year="2024"
      medium="Acrylic on panel"
      dimensions='10" × 10"'
      image="/images/computer.jpeg"
      statement={/* <p>
      The phone is now the television. The television was once the window.
      The window was once the only way to see the world outside. Each
      generation gets a smaller rectangle to look through and calls it
      progress. This painting is about that shrinkage — not with judgment,
      just with attention.
    </p>
<br />
    <p>
      Cellular motors are specialized proteins—kinesin, dynein, and myosin—
      that convert chemical energy (ATP) into mechanical work to drive
      intracellular transport, cell division, and muscle contraction. They
      move along cytoskeletal tracks (microtubules or actin), acting as
      essential freight haulers for organelles, vesicles, and chromosomes,
      ensuring proper organization and communication within the cell.
    </p> */}
    />
  );
}
