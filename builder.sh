source $stdenv/setup

buildPhase() {
  pnpm i
  pnpm static
}

installPhase() {
  mkdir -p $out/bin
  cp foo $out/bin
}

genericBuild

