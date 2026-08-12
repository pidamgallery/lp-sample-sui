const reasons = [
  {
    number: "01",
    title: "話しやすいカウンセリング",
    text: "なりたいイメージが決まっていなくても大丈夫。今のお悩みや普段のお手入れを伺い、一緒にスタイルを考えます。",
  },
  {
    number: "02",
    title: "自宅でも整えやすい髪へ",
    text: "サロンを出た日だけでなく、その次の朝からも。乾かし方まで含めて、無理なく続けられる方法をご提案します。",
  },
  {
    number: "03",
    title: "静かに過ごせる少人数空間",
    text: "周囲を気にせず相談できる予約制の空間。慌ただしさから離れ、髪と心をゆっくり整える時間をお過ごしください。",
  },
];

const steps = [
  ["01", "ご予約", "ご希望の日時とメニューをお知らせください。"],
  ["02", "カウンセリング", "髪質、毎日の過ごし方、気になることを丁寧に伺います。"],
  ["03", "施術", "途中でも確認しながら、あなたに合う形へ整えていきます。"],
  ["04", "仕上げ", "ご自宅での乾かし方や簡単なお手入れ方法をお伝えします。"],
];

export default function Home() {
  return (
    <main>
      <div className="sample-bar">
        Pidam Galleryが制作した架空店舗のLP作成例です
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="SUI hair salon トップへ">
          <span>SUI</span>
          <small>HAIR SALON</small>
        </a>
        <nav aria-label="メインメニュー">
          <a href="#concept">CONCEPT</a>
          <a href="#menu">MENU</a>
          <a href="#access">ACCESS</a>
        </nav>
        <a className="header-cta" href="#reservation">ご予約について</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HAIR &amp; LIFE, IN HARMONY</p>
          <h1 className="hero-heading">
            <span>髪が整うと、</span>
            <span>毎日はもう少し</span>
            <span>軽くなる。</span>
          </h1>
          <p className="hero-lead">
            丁寧なカウンセリングと、自然体でいられるスタイルを。<br />
            大人の髪の悩みに寄り添う、静かな予約制ヘアサロンです。
          </p>
          <a className="primary-button" href="#reservation">
            <span>初回メニューを見る</span><b aria-hidden="true">→</b>
          </a>
        </div>
        <div className="hero-image" role="img" aria-label="静かな美容室で相談する女性とスタイリスト" />
        <p className="hero-note">KICHIJOJI, TOKYO — FICTIONAL SALON</p>
      </section>

      <section className="intro section" id="concept">
        <div className="section-heading">
          <p className="eyebrow">FOR YOUR EVERYDAY</p>
          <h2 className="intro-heading">
            <span>美容室ではきれい。</span>
            <span className="desktop-phrase">でも、次の日はうまくいかない。</span>
            <span className="mobile-phrase">でも、次の日は</span>
            <span className="mobile-phrase">うまくいかない。</span>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            髪の広がりやうねりが気になる。似合う髪型が分からない。美容室で希望をうまく説明できない。
          </p>
          <p>
            SUIでは、髪質だけでなく、毎朝かけられる時間や普段の過ごし方まで丁寧に伺います。目指すのは、特別な日だけではなく、いつもの朝が少し楽になる髪です。
          </p>
          <div className="signature">SUI hair salon</div>
        </div>
      </section>

      <section className="reasons section">
        <div className="center-heading">
          <p className="eyebrow">WHY SUI</p>
          <h2>私たちが大切にしていること</h2>
          <p>髪と向き合う時間が、心までほどける時間になるように。</p>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <div className="reason-number">{reason.number}</div>
              <div
                className={`reason-visual visual-${reason.number}`}
                role="img"
                aria-label={reason.number === "01" ? "スタイリストがお客様の髪について丁寧に相談する様子" : reason.number === "02" ? "艶のある髪をスタイリストが整える様子" : "自然光が入る落ち着いた美容室の店内"}
              />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="menu-panel">
          <div>
            <p className="eyebrow light">FIRST VISIT</p>
            <h2>はじめての方へ</h2>
            <p className="menu-description">
              今の髪の状態とこれからを一緒に考える、SUIの基本コースです。
            </p>
            <ul>
              <li>カット</li><li>艶カラー</li><li>集中ケアトリートメント</li>
            </ul>
          </div>
          <div className="price-box">
            <p>初回限定</p>
            <div><del>通常 15,500円</del><strong>12,800<small>円（税込）</small></strong></div>
            <span>目安時間：約150分</span>
            <small>※料金・メニューは作成例のための架空設定です。</small>
          </div>
        </div>
      </section>

      <section className="flow section">
        <div className="section-heading compact">
          <p className="eyebrow">YOUR FIRST DAY</p>
          <h2>ご来店から<br />仕上げまで</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="stylist section">
        <div className="stylist-portrait" role="img" aria-label="架空の女性スタイリスト・水野しおり" />
        <div className="stylist-copy">
          <p className="eyebrow">STYLIST</p>
          <h2 className="stylist-heading">
            <span>うまく言葉にできない想いも、</span>
            <span>ゆっくりお聞かせください。</span>
          </h2>
          <p>
            その方らしさを大切にしながら、毎日の中で無理なく楽しめるスタイルをご提案します。小さな違和感や迷いも、遠慮なくお話しください。
          </p>
          <div className="stylist-name"><small>Owner Stylist</small><strong>水野 しおり</strong><em>架空の人物です</em></div>
        </div>
      </section>

      <section className="faq section">
        <div className="center-heading">
          <p className="eyebrow">QUESTIONS</p><h2>よくあるご質問</h2>
        </div>
        <div className="faq-list">
          <details><summary>希望の髪型が決まっていなくても大丈夫ですか？</summary><p>はい。今のお悩みや普段のお手入れを伺いながら、一緒に似合う形を探します。</p></details>
          <details><summary>初回メニューの所要時間はどれくらいですか？</summary><p>カウンセリングを含め約150分を想定しています。髪の状態によって前後する場合があります。</p></details>
          <details><summary>静かに過ごしたいと伝えてもよいですか？</summary><p>もちろんです。過ごし方のご希望も、予約時やカウンセリング時にお知らせください。</p></details>
        </div>
      </section>

      <section className="reservation section" id="reservation">
        <p className="eyebrow light">RESERVATION</p>
        <h2 className="reservation-heading">
          <span>あなたの髪のお悩みを、</span>
          <span>まずはお聞かせください。</span>
        </h2>
        <p>このLPは作成例のため、予約ボタンは実際の予約先へ接続されていません。</p>
        <button className="reservation-button" type="button" disabled>
          <span>LINEで空き状況を確認する</span><b>サンプル表示</b>
        </button>
      </section>

      <section className="access section" id="access">
        <div className="access-info">
          <p className="eyebrow">SALON INFORMATION</p>
          <h2>SUI <small>hair salon</small></h2>
          <dl>
            <div><dt>住所</dt><dd>東京都武蔵野市翠町1-2-3 SUI BLDG. 2F</dd></div>
            <div><dt>営業時間</dt><dd>10:00–19:00</dd></div>
            <div><dt>定休日</dt><dd>毎週火曜日・第1、第3水曜日</dd></div>
            <div><dt>アクセス</dt><dd>JR吉祥寺駅より徒歩6分</dd></div>
          </dl>
          <p className="fiction-note">※店舗名・人物・住所・料金・営業時間はすべて架空です。</p>
        </div>
        <div className="map-placeholder" aria-label="架空店舗の地図イメージ">
          <div className="map-lines" /><span className="map-pin">SUI<small>FICTIONAL</small></span>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span>SUI</span><small>HAIR SALON</small></a>
        <p>Pidam Galleryが制作した架空店舗のLP作成例です。</p>
        <small>© 2026 Pidam Gallery — LP Design Sample</small>
      </footer>

      <a className="mobile-cta" href="#reservation">ご予約について <span>→</span></a>
    </main>
  );
}
