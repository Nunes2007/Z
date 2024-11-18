import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1,
    user: user,
    body: 'Posts do dia',
    commentCount: 2,
    retweeted: false,
    dataPost: new Date(2024, 1, 10, 0, 0),
    likeCount: 30,
    liked: true,
    retweetCount: 10,
    image: "https://cdn.meutimao.com.br/fotos-do-corinthians/w614/2024/07/04/yuri_alberto_e_garro_comemorando_gol_do_v40j.jpg"

}