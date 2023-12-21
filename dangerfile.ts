import { danger, markdown, warn } from "danger";

const findRegist = (content: string) => {
  return content.match(/regist/)
}

const warnRegistInPullRequest = () => {
  const pullRequest = danger.github.pr
  const title = pullRequest.title
  const body = pullRequest.body

  if (findRegist(title) || findRegist(body)) {
    warn("⚠️👮🏻‍♂️⚠️👮🏻‍♂️⚠️regist警察出動！！！⚠️👮🏻‍♂️⚠️👮🏻‍♂️⚠️👮🏻")
    markdown(`
## ちょっとまってください！
もしかして、登録するという意味で『regist』という単語をソースコード内で使用しようとしていませんか？？
『regist』という単語は存在しません！！
「登録する」という意味の英単語は『『『register』』』です！！！！気をつけるように！！！

### 参考資料
+ [ソースコードの頻出単語 regist (覚えるべからず) | MSeeeeN](https://mseeeen.msen.jp/resist-regist/)
+ 
`)
  }
}

warnRegistInPullRequest()
