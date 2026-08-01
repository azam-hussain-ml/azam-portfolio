"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";

const USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "azam-hussain-ml";

export default function GitHubActivity() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`),
        ]);
        if (!u.ok || !r.ok) throw new Error("rate limited");
        setUser(await u.json());
        const rData = await r.json();
        setRepos(rData.filter((x) => !x.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4));
      } catch { setFailed(true); }
    })();
  }, []);

  return (
    <section id="github" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" /> Open source
        </div>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">Live from GitHub.</h2>
          <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-sm text-cyan transition hover:text-fog">
            <Github size={16} /> @{USERNAME}
          </a>
        </div>

        {failed ? (
          <p className="rounded-2xl border border-hair bg-panel/50 p-6 text-mist">
            Couldn&apos;t load live data right now — visit{" "}
            <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="text-cyan underline">github.com/{USERNAME}</a>.
          </p>
        ) : (
          <>
            {user && (
              <div className="mb-8 flex flex-wrap gap-8 font-mono text-sm text-mist">
                <span><b className="text-fog">{user.public_repos}</b> repos</span>
                <span><b className="text-fog">{user.followers}</b> followers</span>
                {user.bio && <span>{user.bio}</span>}
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {repos.map((repo) => (
                <motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-hair bg-panel/50 p-5 transition hover:border-blue/50">
                  <h3 className="mb-1.5 font-mono text-sm text-cyan">{repo.name}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-mist">{repo.description || "No description yet."}</p>
                  <div className="flex gap-5 font-mono text-xs text-mist">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
