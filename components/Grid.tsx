import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => {
          if (item.id != 4 && item.id != 6) {
            return (
              <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                // remove icon prop
                // remove original classname condition
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            );
          }
        })}
      </BentoGrid>
      <div className="lg:flex lg:justify-center gap-7 grid">
        <BentoGridItem
          id={gridItems[3].id}
          title={gridItems[3].title}
          description={gridItems[3].description}
          // remove icon prop
          // remove original classname condition
          className={gridItems[3].className}
          img={gridItems[3].img}
          imgClassName={gridItems[3].imgClassName}
          titleClassName={gridItems[3].titleClassName}
          spareImg={gridItems[3].spareImg}
        />

        <BentoGridItem
          id={gridItems[4].id}
          title={gridItems[4].title}
          description={gridItems[4].description}
          // remove icon prop
          // remove original classname condition
          className={gridItems[4].className}
          img={gridItems[4].img}
          imgClassName={gridItems[4].imgClassName}
          titleClassName={gridItems[4].titleClassName}
          spareImg={gridItems[4].spareImg}
        />
      </div>
    </section>
  );
};

export default Grid;
