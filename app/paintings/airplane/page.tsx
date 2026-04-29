import PaintingDetail from "@/components/PaintingDetail";

export default function Airplane() {
  return (
    <PaintingDetail
      title="Airplane"
      year="2023"
      medium="Oil on canvas"
      dimensions='18" × 24"'
      image="/images/airplane.jpg"
      statement={
  <>
    <p>
      Medieval painting (c. 500–1400 AD) evolved from early Christian and Roman styles, prioritizing spiritual symbolism over realism to educate a largely illiterate audience. Dominated by religious narratives, it thrived through illuminated manuscripts, frescos, and panel painting, evolving from stylized Byzantine forms to the more naturalistic, detailed approaches of the late Gothic period.
    </p>
<br />
    <p>
      In-flight entertainment (IFE) evolved from, projected films in the 1920s to personal seatback screens introduced by Northwest Airlines in 1988. Early, primitive screens were 2.7-inch LCDs developed by Airvision, offering six channels, which paved the way for modern, on-demand, and interactive HD, touchscreen displays on long-haul flights.
    </p>
  </>
}
    extraImages={[
    "/images/airplane2.jpeg",
  ]}/>
  );
}


