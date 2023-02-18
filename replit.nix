{ pkgs }: {
  deps = [
    pkgs.php80
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}