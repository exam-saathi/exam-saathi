#!/data/data/com.termux/files/usr/bin/bash
set -e

mkdir -p app/login components/auth

cat > components/auth/ProfileLogin.jsx <<'EOT'
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const states = [
  "उत्तर प्रदेश",
  "बिहार",
  "दिल्ली",
  "मध्य प्रदेश",
  "राजस्थान",
  "अन्य",
];

const districts = {
  "उत्तर प्रदेश": ["लखनऊ", "कानपुर नगर", "प्रयागराज", "वाराणसी", "आगरा", "गोरखपुर", "अन्य"],
  "बिहार": ["पटना", "गया", "मुजफ्फरपुर", "भागलपुर", "नालंदा", "अन्य"],
  "दिल्ली": ["नई दिल्ली", "उत्तर दिल्ली", "दक्षिण दिल्ली", "अन्य"],
  "मध्य प्रदेश": ["भोपाल", "इंदौर", "ग्वालियर", "जबलपुर", "अन्य"],
  "राजस्थान": ["जयपुर", "जोधपुर", "उदयपुर", "कोटा", "अन्य"],
  "अन्य": ["अन्य"],
};

export default function ProfileLogin() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!name.trim() || !state || !district) return;

    localStorage.setItem(
      "loyalAcademyUser",
      JSON.stringify({
        name: name.trim(),
        state,
        district,
        loggedIn: true,
      })
    );

    router.push("/");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-[100px]" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />

      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-orange-400 text-2xl font-black shadow-lg">
            LA
          </div>

          <h1 className="mt-5 text-3xl font-black">
            Loyal Academy
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            अपनी learning profile बनाएं
          </p>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-bold">
              आपका नाम
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="अपना नाम लिखें"
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3.5 outline-none transition focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              State
            </label>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setDistrict("");
              }}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3.5 outline-none focus:border-blue-400"
            >
              <option value="">State चुनें</option>
              {states.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              District
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={!state}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3.5 outline-none disabled:opacity-40 focus:border-blue-400"
            >
              <option value="">District चुनें</option>
              {(districts[state] || []).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-orange-500 py-4 font-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-blue-500/20"
          >
            Continue to Loyal Academy →
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          आपका profile इसी device पर सुरक्षित रहेगा।
        </p>
      </div>
    </main>
  );
}
EOT

cat > app/login/page.jsx <<'EOT'
import ProfileLogin from "@/components/auth/ProfileLogin";

export default function LoginPage() {
  return <ProfileLogin />;
}
EOT

npm run build

echo
echo "======================================"
echo " LOGIN SYSTEM READY"
echo "======================================"
echo
echo "Open:"
echo "https://exam-sathi.in/login"
echo
echo "Deploy:"
echo "git add ."
echo 'git commit -m "Add professional profile login"'
echo "git push"
echo "vercel --prod --yes"
