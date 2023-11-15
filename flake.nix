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
        buildInputs = with pkgs; [
          nodejs_20
          nodePackages_latest.npm-check-updates
          bun
        ];
        tmuxConfig = ''
          tmux new-session -s my_session -d
          tmux new-window -t my_session:2
          tmux send-keys -t my_session:1.0 'vi' C-m
          tmux attach-session -t my_session
        '';
      in
      {
        devShell = pkgs.mkShell {
          inherit buildInputs;
          shellHook = ''
            ${tmuxConfig}
          '';
        };
      });
}

