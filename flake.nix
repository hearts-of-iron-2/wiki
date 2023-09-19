{
  description = ''
    Run 'nix develop' to have a dev shell that has everything this project needs.
    Run `nix build` to build this project.
    Run `nix run` to run this project.
  '';

  inputs = {
    nixpkgs.url = "nixpkgs";
    systems.url = "github:nix-systems/x86_64-linux";
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.systems.follows = "systems";
    };
  };

  outputs = { self, nixpkgs, flake-utils, systems }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pname = "wiki.hoi2bunker.com";
        version = "1.0.0";
        buildInputs = with pkgs; [
          pandoc
          nodejs_20
          nodePackages_latest.pnpm
        ];
        nativeBuildInputs = buildInputs;
        npmDepsHash = "sha256-Etk5w+kCjXPzu7b01/ULlFkoUo1Pk+C23MmA/UyCfkY=";
        projectRoot = ./.;
        tmuxConfig = ''
          tmux new-session -s my_session -d
          tmux new-window -t my_session:2
          tmux split-window -h -t my_session:2
          tmux send-keys -t my_session:1.0 'vi' C-m
          tmux send-keys -t my_session:2.0 'pnpm dev' C-m
          tmux attach-session -t my_session
        '';
      in
      {
        devShell = pkgs.mkShell {
          inherit buildInputs;
          shellHook = ''
            #!/usr/bin/env bash
            ${tmuxConfig}
          '';
        };
        packages.default = pkgs.buildNpmPackage {
          inherit pname version buildInputs npmDepsHash nativeBuildInputs;
          src = ./.;
          postInstall = ''
            mkdir -p $out/bin
            exe="$out/bin/${pname}"
            lib="$out/lib/node_modules/${pname}"
            cp -r ./.next $lib
            touch $exe
            chmod +x $exe
            echo "
                #!/usr/bin/env bash
                cd $lib
                ${pkgs.nodePackages_latest.pnpm}/bin/pnpm run start" > $exe
          '';
        };
      });
}

