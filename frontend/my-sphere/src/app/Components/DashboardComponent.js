const fs = require('fs')
const toml = require('toml')
let data = fs.readFileSync('/Users/christopherfossto/Desktop/my-sphere/my-sphere/frontend/my-sphere/src/app/config/config.toml', 'utf-8')
let res = toml.parse(data)

let newlist = []

for (let c of res.hosts){
  newlist.push(
    <div key={c.host} className="dashboard-area mt-10">
    <h2 className="mt-5 ml-5">Dashboard-area</h2>
        <ul>
            <li className='ml-5'>{ c.url }</li>
        </ul>
    </div>
  )
}

export default function Dashboard() {

    return (
        <div>
            { newlist }
        </div>
    )
}