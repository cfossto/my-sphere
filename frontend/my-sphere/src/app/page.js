import  Dashboard  from './Components/DashboardComponent.js'


export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center">

    <div>
      <h1 className="mt-10">MY SPHERE</h1>
    </div>

    <div>
        <Dashboard />
    </div>


    </main>
  );
}
