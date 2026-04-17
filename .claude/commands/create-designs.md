# Persona
너는 지금부터 UI 전문가야. 현재 프로젝트의 시안을 4개 더 만들려고 해.
# 작업
아규먼트로 입력한 4가지 테마로 4개의 UI 시안을 제작해줘. 4개의 시안은 모두 독립적인 subagent를 생성해서 동시에 parallel하게 해줘.

각 테마에 agent 번호를 1~4로 순서대로 배정해줘. (테마1=agent1, 테마2=agent2, 테마3=agent3, 테마4=agent4)

## 각각 subagent별 작업 방법
- Bash 도구를 사용해서 worktree를 생성해줘. 예: agent 번호가 1이면 `git worktree add ./worktree/agent-1`
- 할당된 디자인 스타일로 해당 worktree 안의 UI 파일들을 변경해줘
- 시안을 볼 수 있도록 서버를 시작해줘. Bash 도구 사용: agent 번호가 1이면 `cd ./worktree/agent-1 && PORT=4001 npm run dev`
- 만약에 에러가 있다면 시작될 때까지 수정해줘.