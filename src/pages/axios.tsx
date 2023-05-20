import axios from "axios";
import setResId from "./recoil";
import { idState } from "./status";

export type IdType = {
  room_id: string;
  user_id: string;
};

export type session1 = {
  user_name: string;
  session_id: string;
  Id: resType;
  setId: React.Dispatch<React.SetStateAction<resType>>;
};

export type session2 = {
  owner_id: number;
  participants_num: number;
  round_num: number;
  questions_num: number;
  Id: resType;
  setId: React.Dispatch<React.SetStateAction<resType>>;
};

export type resType = {
  id: number;
  room_id: number;
};

export default async function postCookie({
  user_name: user_name,
  session_id: session_id,
  Id: id,
  setId: setId,
}: session1) {
  try {
    const url = "http://localhost:8000/create_user";
    const res = await axios.post<resType>(url, { user_name, session_id });
    setId({ ...id, id: res.data.id });
    console.log(res.data.id);
    return [];
  } catch (e) {
    console.error("post出来ませんでした\n", e);
    return [];
  }
}

export async function postRoomInfo({
  owner_id: owner_id,
  participants_num: participants_num,
  round_num: round_num,
  questions_num: questions_num,
  Id: id,
  setId: setId,
}: session2) {
  try {
    const url = "http://localhost:8000/create_room";
    const res = await axios.post<resType>(url, {
      owner_id,
      participants_num,
      round_num,
      questions_num,
    });
    setId({ ...id, room_id: res.data.room_id });
    console.log(res.data.room_id);

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
