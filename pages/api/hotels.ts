// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hotels,featuredHotel } from "../../utils/types";
import { featuredHotels,MostPickHotels } from "../../data/hotels";

type Data = {
  featured: featuredHotel[];
  mostPickHotels:Hotels[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ featured: featuredHotels,mostPickHotels:MostPickHotels });
}
