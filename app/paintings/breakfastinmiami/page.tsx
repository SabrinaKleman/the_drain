import PaintingDetail from "@/components/PaintingDetail";

export default function BreakfastInMiami() {
  return (
    <PaintingDetail
      title="Breakfast in Miami"
      year="2023"
      medium="Oil on canvas"
      dimensions='30" × 40"'
      image="/images/breakfastinmiami.jpeg"
   descriptionIntellectuals={
        <p>Reinventing Hockney’s apocryphal “Breakfast in Malibu”, the artist treats perspective like a child; putting perspective in “time out”, forcing it to add money to the swear jar, and banishing it to its cold, lonely room. In turn, with perspective infantilized, the viewer is left helpless, grasping at straws to develop a whole new “perspective” in its place. A love letter to the artist’s birthplace of Miami and the Pacific’s little brother, the humble, often totally forgotten, Atlantic Ocean, “Breakfast in Miami” overwhelms you with nature.  

</p>
      }
      descriptionCommon={
        <p>The painting almost looks real for a second, but when you look closer, you can see there are brushstrokes… that’s how you know this is for sure art. Pretty sure the artist probably isn’t going for full photorealism; which could almost be considered too niche these days. 

</p>
      }
   extraImages={[
    "/images/breakfastinmiami2.jpeg",
  ]}/>
  );
}
