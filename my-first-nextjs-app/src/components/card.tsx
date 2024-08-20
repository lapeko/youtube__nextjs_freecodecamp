import Image from "next/image";
import {FC} from "react";

type Props = {
  item: {
    "id": string;
    "title": string;
    "description": string;
    "image": string;
  }
}

const Card: FC<Props> = ({item}) => (
  <article key={item.id}>
    <div className="relative h-64 w-64">
      <Image
        src={item.image}
        alt={item.title}
        priority={true}
        fill
        className="object-cover"
      />
    </div>
    <h2 className="font-bold text-xl">{item.title}</h2>
    <p>{item.description}</p>
  </article>
)

export default Card;
