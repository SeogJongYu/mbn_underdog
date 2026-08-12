import Logo from "@/app/assets/mbn_logo.png";
import Poster from "@/app/assets/underdog_poster.jpeg";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-surface sticky top-0">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Image
            src={Logo}
            alt="MBN"
            className="h-8 w-auto sm:h-10 shrink-0"
            unoptimized
          />
        </div>
      </header>

      <div
        id="top"
        className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-32 pt-4 sm:px-8 sm:pb-40 sm:pt-8"
      >
        <section className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <Image
            src={Poster}
            alt="언더독 출연자 모집 포스터"
            className="h-auto w-full"
            unoptimized
            preload
          />
        </section>

        <section className="mt-4 flex w-full max-w-xl flex-col items-center rounded-2xl bg-primary px-5 py-7 text-center text-primary-foreground sm:mt-8 sm:px-8 sm:py-9">
          <p className="text-lg font-bold sm:text-xl">
            언더독과 함께할 출연자를 기다립니다
          </p>
          <a
            href="/mbn_underdog_application.hwp"
            download="MBN_언더독_참가지원서.hwp"
            className="mt-5 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-accent px-6 py-3 text-base font-bold text-accent-foreground shadow-sm transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
          >
            참가신청서 다운로드
          </a>
          <p className="mt-3 text-xs opacity-80">
            신청서 파일을 내려받아 작성 후 안내에 따라 제출해 주세요.
          </p>
        </section>

        <footer className="mt-4 flex flex-col items-center text-center text-sm leading-5 text-muted-foreground sm:mt-8 sm:text-sm font-semibold">
          <p>문의 사항은 아래 카카오톡 메시지에 남겨주세요.</p>
          <a
            href="https://open.kakao.com/o/sQMmotIi"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-base font-extrabold text-primary underline decoration-2 underline-offset-4 transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-lg"
          >
            카카오톡으로 문의하기
          </a>
        </footer>
      </div>
    </main>
  );
}
