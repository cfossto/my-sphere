const fs = require('fs')
const toml = require('toml')
let data = fs.readFileSync('/Users/christopherfossto/Desktop/my-sphere/my-sphere/frontend/my-sphere/src/app/config/config.toml', 'utf-8')
let res = toml.parse(data)

let j = JSON.parse(JSON.stringify(res))

console.log(j.hosts)

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">

      <h1 className="mt-10">MY SPHERE</h1>

      <div className="dashboard-area mt-10">
        <h2 className="mt-5 ml-5">Dashboard-area 1</h2>
        <ul>
        </ul>
      </div>

      <div className="dashboard-area mt-10">
        <h2 className="mt-5 ml-5">Dashboard-area 2</h2>
      </div>

      <div className="dashboard-area mt-10">
        <h2 className="mt-5 ml-5">Dashboard-area 3</h2>
      </div>

    </main>
  );
}
