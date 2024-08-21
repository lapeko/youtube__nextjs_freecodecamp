import Image from "next/image";
import {FC} from "react";
import {clsx} from "clsx";

export type CardDataItem = {
  "id": string;
  "title": string;
  "description": string;
  "image": string;
}
type Props = {
  item: CardDataItem,
  highlight?: boolean,
}

const Card: FC<Props> = ({item, highlight = true}) => (
  <article
    key={item.id}
    className={clsx("p-4 mb-4 rounded-lg duration-200", {"hover:bg-gray-900": highlight})}
  >
    <div className="relative h-64 w-64 mb-4">
      <Image
        src={item.image}
        alt={item.title}
        priority={true}
        fill
        className="object-cover"
      />
    </div>
    <h2 className="font-bold text-xl mb-4 text-gray-300">{item.title}</h2>
    <p className="text-gray-400">{item.description}</p>
  </article>
)

export default Card;
