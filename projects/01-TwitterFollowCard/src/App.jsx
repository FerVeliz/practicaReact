import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'ferVeliz',
      name: 'Fernando Veliz',
      isFollowing: false
    },
    {
      userName: 'mariGimeno',
      name: 'Marina Gimeno',
      isFollowing: true
    }
  ]

  function formatName (userName) { return `@${userName}` }
  return (
    <section className='App'>
      {
            users.map(user => {
              const { userName, name, isFollowing } = user
              return (
                <TwitterFollowCard
                  formatUserName={formatName}
                  userName={userName}
                  initialIsFollowing={isFollowing}
                  key={userName}
                >
                  {name}
                </TwitterFollowCard>
              )
            })
        }
    </section>
  )
}
