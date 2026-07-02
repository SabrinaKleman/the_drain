import PaintingDetail from "@/components/PaintingDetail";

export default function TVInTheLand() {
  return (
    <PaintingDetail
      title="The Television Landscape"
      year="2025"
      medium="Oil on canvas"
      dimensions='30" × 40"'
      image="/images/tvinland.jpeg"
      descriptionIntellectuals={
        <p>Hopscotching the intersections of technology, nature, religion and the Italian Renaissance, “The Television Landscape” compartmentalizes the three dimensional viewer into the two dimensional screens so prevalent in contemporary life. The screen and canvas as portmanteau. Invention becomes reinvention, reimagined as renovation, revenging invention. Reinvesting vengeance as retentional intention, all via paint. Meanwhile, the line dominates; and the rectangle is shunned. 
</p>
      }
      descriptionCommon={
        <p>The painting is trippy, very trippy, man. Makes you think. Guy must’ve been on something when he painted this.
</p>
      }
      descriptionBuyerRich={
        <p>A poll of bankers, lawyers and titans of finance agree: this is art….. expensive art. The piece looks perfect near and around fireplaces, other priceless art, and massive in home theater rooms. Has the appearance of art, but the “substance” of apple stock in the 80s.  
</p>
      }
      descriptionBuyerPoor={
        <p>N/A</p>
      }
    />
  );
}