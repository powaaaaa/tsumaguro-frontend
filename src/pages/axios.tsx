import axios from "axios";
import setResId from "./recoil";

export type IdType = {
  room_id: string;
  user_id: string;
};

export type session = {
  user_name: string;
  session_id: string;
};

export type resType = {
  id: number;
};

export async function postCookie({
  user_name: user_name,
  session_id: session_id,
}: session) {
  try {
    const url = "http://localhost:8000/create_user";
    const res = await axios.post<resType>(url, { user_name, session_id });
    console.log(res.data.id);
    setResId(res.data.id);
    return [];
  } catch (e) {
    console.error("post出来ませんでした\n", e);
    return [];
  }
}

export const getId = async (): Promise<IdType> => {
  //   try {
  const url = "";
  const res = await axios.get<IdType>(url);
  const Ids: IdType = { room_id: res.data.room_id, user_id: res.data.user_id };
  return Ids;
  //   } catch (e) {
  //     console.log(e);
  //     return [];
  //   }
};

export const getGameStatus = async (): Promise<number> => {
  const url = "";
  const res = await axios.get<number>(url);
  const status: number = res.data;
  return status;
};
