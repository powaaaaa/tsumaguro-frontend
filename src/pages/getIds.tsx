import axios from "axios";

export type IdType = {
  room_id: string;
  user_id: string;
};

export async function postCookie(cookieStr: string) {
  var str = document.cookie;
  try {
    const url = "";
    const res = await axios.post<IdType>(url, { const: { cookieStr } });
    console.log(res);
    return [];
  } catch (e) {
    console.log(e);
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
