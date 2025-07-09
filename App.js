
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Khaled AI Studio</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow">تسجيل الدخول</button>
      </header>

      <main className="grid gap-6">
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">ولد صورة من فكرة</h2>
          <input className="w-full p-3 border rounded-xl mb-3" placeholder="اكتب فكرتك هنا..." />
          <button className="bg-green-500 text-white px-4 py-2 rounded-xl">ولد صورة</button>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">ارفع صورة - اعمل زيها</h2>
          <input type="file" className="mb-3" />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-xl">اعمللي زي دي</button>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">ولد فيديو بلهجة عربية</h2>
          <select className="w-full p-3 border rounded-xl mb-3">
            <option>مصري</option>
            <option>خليجي</option>
            <option>شامي</option>
            <option>مغربي</option>
          </select>
          <input className="w-full p-3 border rounded-xl mb-3" placeholder="اكتب المشهد هنا..." />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl">ولد فيديو</button>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <p>🎁 خُد كوينزك اليومية</p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-xl">خد كوينز</button>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">اعمل إعلان لمنتجك</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-xl">ابدأ دلوقتي</button>
        </section>
      </main>
    </div>
  );
}

export default App;
