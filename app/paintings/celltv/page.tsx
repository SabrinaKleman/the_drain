import PaintingDetail from "@/components/PaintingDetail";

export default function CellTV() {
  return (
    <PaintingDetail
      title="Running out of Time into First"
      year="2025"
      medium="Oil on canvas"
      dimensions='30" × 40"'
      image="/images/celltv.jpg"
     descriptionIntellectuals={
        <p>Confronting time directly, “Running Out of Time Into First” wastes no time itself in immediately raising that omnipresent fear of the rational thinker directly, say it with me: how do technology, success, human achievement, nature and the physical processes of our biology interact with how we observe time? How is the natural world consumed in our technological society? Is the table in the painting in fact, a tableaux? These ancient questions are finally answered, the circle is squared, and the viewer can rest.

</p>
      }
      descriptionCommon={
        <p>The painting almost looks real for a second, but when you look closer, you can see there are brushstrokes… that’s how you know this is for sure art. Pretty sure the artist probably isn’t going for full photorealism; which could almost be considered too niche these days. 

</p>
      }
      descriptionBuyerRich={
        <p>Eat your heart out, billionaire rivals. Yes, you may have one more Maybach than me; yes your yacht is a few feet longer than mine; yes my butler is your butler’s butler… but do you have an original one of a kind piece by the Drain? This piece is the ultimate fuck you to your wealthy cronies and for that… it’s priceless

</p>
      }
      descriptionBuyerPoor={
        <p>N/A</p>
      }
    extraImages={[
    "/images/celltv2.jpeg",
    "/images/celltv3.jpeg",
    "/images/celltv4.jpeg",
  ]}/>
  );
}
