import { GitHubPRDSL, danger, markdown, warn } from "danger";

const findRegist = (content: string) => {
  return content.match(/\bregist\b/)
}

const warnRegist = (createdBy: string) => {
    const body = `
@${createdBy}
## ⚠️⚠️⚠️ちょっとまってください！⚠️⚠️⚠️
もしかして、『**regist**』という単語をソースコード内で使用しようとしていませんか？？
『regist』という単語は**存在しません！！**
「登録する」という意味の英単語は『『『**register**』』』です！！！！以後、気をつけるように！！！

### 参考資料
+ [ソースコードの頻出単語 regist (覚えるべからず) | MSeeeeN](https://mseeeen.msen.jp/resist-regist/)
+ [“regist” という単語は存在しない | text.Baldanders.info](https://text.baldanders.info/remark/2017/04/regist-dose-not-exist/)
+ [regist 存在しない - Google 検索](https://www.google.com/search?q=regist+%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84&rlz=1C5CHFA_enJP1007JP1008&oq=regist+%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgKGB7SAQgzMjYyajFqN6gCALACAA&sourceid=chrome&ie=UTF-8)`

    warn("👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️regist警察出動！！！👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️")
    markdown(body)
}

const warnRegistInPullRequest = (pullRequest: GitHubPRDSL) => {
  const title = pullRequest.title
  const body = pullRequest.body
  const createdBy = pullRequest.user.login

  if (findRegist(title) || findRegist(body)) {
    warnRegist(createdBy)
  }
}


warnRegistInPullRequest(danger.github.pr)