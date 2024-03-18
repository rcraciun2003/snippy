import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Home() {
return <main className="flex-1 h-full p-8 overflow-y-auto">
<Card>
  <CardHeader className="pb-2">
    <CardTitle>Total Users</CardTitle>
  </CardHeader>
  <CardContent>
    <span className="text-2xl font-bold">1,245</span>
  </CardContent>
</Card>
<Card>
  <CardHeader className="pb-2">
    <CardTitle>Orders</CardTitle>
  </CardHeader>
  <CardContent>
    <span className="text-2xl font-bold">645</span>
  </CardContent>
</Card>
<Card>
  <CardHeader className="pb-2">
    <CardTitle>Sales</CardTitle>
  </CardHeader>
  <CardContent>
    <span className="text-2xl font-bold">$24,680</span>
  </CardContent>
</Card>
<Card>
  <CardHeader className="pb-2">
    <CardTitle>Performance</CardTitle>
  </CardHeader>
  <CardContent>
    <span className="text-2xl font-bold">87%</span>
  </CardContent>
</Card>
</main>
}
