import { danger, warn } from "danger";

const findRegist = (content: string) => {
  return content.match(/regist/)
}

const warnRegistInPullRequest = () => {
  const pullRequest = danger.github.pr
  const title = pullRequest.title
  const body = pullRequest.body

  if (findRegist(title) || findRegist(body)) {
    warn(`## regist発見！！！
`)
  }
}

warnRegistInPullRequest()
