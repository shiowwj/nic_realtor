import { SliceZone } from "@prismicio/react";
import { components } from "slices";
import { FC } from "react";
interface Props {
	className?: string;
	slice?: any;
	variant?: "blog" | "consult";
}

const CtaView: FC<Props> = ({ className, slice, variant }) => {
  return <SliceZone slices={slice} components={components} />
}

export default CtaView;