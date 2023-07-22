{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    haskellPackages.pandoc
    nodejs_20
    nodePackages_latest.pnpm
  ];
}

