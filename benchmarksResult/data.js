window.BENCHMARK_DATA = {
  "lastUpdate": 1695224809805,
  "repoUrl": "https://github.com/8auu/discordeno",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a1a41fac854d141d2375018c44acb8cc2bf1cc9",
          "message": "CI: Run benchmark  (#2563)\n\n* fix(bench): try to fix benchmark\r\n\r\n* style: deno fmt\r\n\r\n* fix: remove check formating\r\n\r\n* fix: add fake token\r\n\r\n* fix: tranform\r\n\r\n* deno fmt\r\n\r\n* add parseFloat\r\n\r\n* fix unit\r\n\r\n* refactor: change fetch target to benchrepo\r\n\r\n* fix: oldBot\r\n\r\n* refactor: use custom input\r\n\r\n* ci: add tee\r\n\r\n* style: deno fmt\r\n\r\n* ci: cache deps\r\n\r\n* chore: remove\r\n\r\n* ci: add memory benchmark\r\n\r\n* fix: fix url for main repo\r\n\r\n* deno fmt\r\n\r\n* ci: add comment-always\r\n\r\n* fix: link\r\n\r\n* just trying trigger\r\n\r\n* ci: only push on main\r\n\r\n* fix: type\r\n\r\n* fix: range\r\n\r\n* fixed\r\n\r\n* style: deno fmt\r\n\r\n* fix: path\r\n\r\n* Add upload output\r\n\r\n* style: deno fmt\r\n\r\n* ci: add create branch on pr owner's repo\r\n\r\n* fix: github.repository\r\n\r\n* ci: fix remove id benchmark-action\r\n\r\n* fix\r\n\r\n* fix: type\r\n\r\n* reverse change\r\n\r\n* ci: add cache\r\n\r\n* feat: add using cache\r\n\r\n* bench: update name and ignore previous when ci\r\n\r\n* style: name\r\n\r\n* feat: fix pr message style\r\n\r\n* add more benchmark\r\n\r\n* deno fmt\r\n\r\n* fix\r\n\r\n* fix: wording\r\n\r\n* chore: only run on success\r\n\r\n* fix: used last head as current commit",
          "timestamp": "2022-10-29T14:22:23-05:00",
          "tree_id": "3bde0cf961a4c8f8fabc377c1a867e58231d2a7c",
          "url": "https://github.com/discordeno/discordeno/commit/7a1a41fac854d141d2375018c44acb8cc2bf1cc9"
        },
        "date": 1667071398642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1430,
            "unit": "ns/iter",
            "range": "1230 … 1460"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 142,
            "unit": "ns/iter",
            "range": "138.48 … 200.42"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 132,
            "unit": "ns/iter",
            "range": "128.46 … 141.39"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 470,
            "unit": "ns/iter",
            "range": "463.38 … 728.33"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1300,
            "unit": "ns/iter",
            "range": "1290 … 1310"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 617,
            "unit": "ns/iter",
            "range": "608.79 … 662.78"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 463,
            "unit": "ns/iter",
            "range": "458.11 … 481.44"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 489,
            "unit": "ns/iter",
            "range": "484.57 … 503.27"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 502,
            "unit": "ns/iter",
            "range": "496.39 … 569.93"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 275.04,
            "unit": "MB",
            "range": "271.32 … 276.93"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 257.51,
            "unit": "MB",
            "range": "255.5 … 260.19"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 275.48,
            "unit": "MB",
            "range": "271.31 … 278.75"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd82b12c170eda28f129cdc87cbbb095d521d28e",
          "message": "Fix Ci (#2565)\n\n* fix: Validate not running cron\r\n\r\n* fix: always upload artifact\r\n\r\n* fix: generate fail on first comment",
          "timestamp": "2022-10-29T14:45:58-05:00",
          "tree_id": "ee5b8f3560a733536c86e420437e2d81be17405c",
          "url": "https://github.com/discordeno/discordeno/commit/fd82b12c170eda28f129cdc87cbbb095d521d28e"
        },
        "date": 1667072813856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1820,
            "unit": "ns/iter",
            "range": "1770 … 1920"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 128,
            "unit": "ns/iter",
            "range": "115.81 … 160.52"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 124,
            "unit": "ns/iter",
            "range": "112.77 … 140.17"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 409,
            "unit": "ns/iter",
            "range": "387.66 … 626.77"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1140,
            "unit": "ns/iter",
            "range": "1110 … 1160"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 545,
            "unit": "ns/iter",
            "range": "525.85 … 558.21"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 419,
            "unit": "ns/iter",
            "range": "408.69 … 426.17"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 432,
            "unit": "ns/iter",
            "range": "417.24 … 446.19"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 442,
            "unit": "ns/iter",
            "range": "429.3 … 449.9"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 276.23,
            "unit": "MB",
            "range": "273.3 … 278.26"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 257.26,
            "unit": "MB",
            "range": "255.23 … 258.93"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 274.89,
            "unit": "MB",
            "range": "271.27 … 276.76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e8f2218611c249d902036b184a170981e8cf7c7",
          "message": "Fix: commit not showing (#2566)\n\n* testing\r\n\r\n* remove test\r\n\r\n* fix\r\n\r\n* fix typo\r\n\r\n* chore: remove path from flag",
          "timestamp": "2022-10-31T09:35:57-05:00",
          "tree_id": "5d65fe3dfd0d416fb9191eaff307e2a68225598b",
          "url": "https://github.com/discordeno/discordeno/commit/8e8f2218611c249d902036b184a170981e8cf7c7"
        },
        "date": 1667227025689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 2210,
            "unit": "ns/iter",
            "range": "2040 … 2990"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 147,
            "unit": "ns/iter",
            "range": "141.48 … 636.06"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 143,
            "unit": "ns/iter",
            "range": "139.63 … 159.81"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 465,
            "unit": "ns/iter",
            "range": "458.55 … 699.24"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1280,
            "unit": "ns/iter",
            "range": "1280 … 1310"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 623,
            "unit": "ns/iter",
            "range": "615.99 … 672.73"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 473,
            "unit": "ns/iter",
            "range": "469.07 … 481.27"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 491,
            "unit": "ns/iter",
            "range": "486.16 … 516.75"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 501,
            "unit": "ns/iter",
            "range": "495.27 … 578.71"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 273.79,
            "unit": "MB",
            "range": "271.77 … 276.25"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 260.79,
            "unit": "MB",
            "range": "260.49 … 261.25"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 274.2,
            "unit": "MB",
            "range": "272.77 … 275.12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d62e4422244af945a164c971c754626d6c098828",
          "message": "enable inlay (#2568)\n\n* enable inlay\r\n\r\n* sneak in\r\n\r\n* feat: add lock file",
          "timestamp": "2022-11-01T14:29:46-05:00",
          "tree_id": "7f3d827d202faf3ece2993c2cd708a61ece7a16c",
          "url": "https://github.com/discordeno/discordeno/commit/d62e4422244af945a164c971c754626d6c098828"
        },
        "date": 1667331072223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1350,
            "unit": "ns/iter",
            "range": "1240 … 1610"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 165,
            "unit": "ns/iter",
            "range": "148.23 … 236.56"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 153,
            "unit": "ns/iter",
            "range": "134.52 … 726.5"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 816,
            "unit": "ns/iter",
            "range": "500 … 9870000"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1920,
            "unit": "ns/iter",
            "range": "1400 … 8050000"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 748,
            "unit": "ns/iter",
            "range": "655.16 … 1630"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 583,
            "unit": "ns/iter",
            "range": "498.61 … 926.05"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 622,
            "unit": "ns/iter",
            "range": "533.74 … 1080"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 600,
            "unit": "ns/iter",
            "range": "528.6 … 953.16"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 274.98,
            "unit": "MB",
            "range": "271.83 … 278.26"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 257.6,
            "unit": "MB",
            "range": "255.51 … 259.43"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 274.99,
            "unit": "MB",
            "range": "271.57 … 276.76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiran121102@gmail.com",
            "name": "Awesome Stickz",
            "username": "AwesomeStickz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "788bd852184b91e3e7b0cf0f7b0468dd1d2c41c7",
          "message": "fix: add members collection to guild in guild transformer if available (#2569)",
          "timestamp": "2022-11-01T14:56:38-05:00",
          "tree_id": "35eb665d9cb6b3b9e6c865af21e2fe324aba9904",
          "url": "https://github.com/discordeno/discordeno/commit/788bd852184b91e3e7b0cf0f7b0468dd1d2c41c7"
        },
        "date": 1667332670234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 2470,
            "unit": "ns/iter",
            "range": "2280 … 3470"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 166,
            "unit": "ns/iter",
            "range": "117.58 … 579.39"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 169,
            "unit": "ns/iter",
            "range": "122.65 … 1030"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 521,
            "unit": "ns/iter",
            "range": "430.93 … 1010"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1420,
            "unit": "ns/iter",
            "range": "1340 … 1690"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 710,
            "unit": "ns/iter",
            "range": "584.72 … 1030"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 536,
            "unit": "ns/iter",
            "range": "438.72 … 590.63"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 509,
            "unit": "ns/iter",
            "range": "405.99 … 836.48"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 522,
            "unit": "ns/iter",
            "range": "414.18 … 696.77"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.25,
            "unit": "MB",
            "range": "277.67 … 281.6"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 262.7,
            "unit": "MB",
            "range": "256.91 … 268.66"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 278.82,
            "unit": "MB",
            "range": "275.96 … 280.32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc186589cb86ae140b76d43c01d78044e74f9bc5",
          "message": "feat: add benchmark to site (#2567)\n\n* feat: add benchmark to site\r\n\r\n* test\r\n\r\n* remove test file",
          "timestamp": "2022-11-02T10:13:11-05:00",
          "tree_id": "2851c9c90f62277135827983418879cd3384724f",
          "url": "https://github.com/discordeno/discordeno/commit/dc186589cb86ae140b76d43c01d78044e74f9bc5"
        },
        "date": 1667402074866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1450,
            "unit": "ns/iter",
            "range": "1360 … 1900"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 187,
            "unit": "ns/iter",
            "range": "172.55 … 461.38"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 168,
            "unit": "ns/iter",
            "range": "156.41 … 508.56"
          },
          {
            "name": "[Transformer] Discord Rules to a Rules",
            "value": 660,
            "unit": "ns/iter",
            "range": "559.97 … 1670"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1620,
            "unit": "ns/iter",
            "range": "1550 … 1800"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 833,
            "unit": "ns/iter",
            "range": "770.48 … 1340"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 620,
            "unit": "ns/iter",
            "range": "579.41 … 815.38"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 634,
            "unit": "ns/iter",
            "range": "594.96 … 1530"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 642,
            "unit": "ns/iter",
            "range": "604.46 … 811.34"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.16,
            "unit": "MB",
            "range": "277.94 … 280.59"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 263.81,
            "unit": "MB",
            "range": "259.9 … 266.9"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 277.77,
            "unit": "MB",
            "range": "275.98 … 279.11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a385176d8a15c4be7f113d819cb558ecdbe9bf6d",
          "message": "bench: add cpu correction (#2572)\n\n* feat: add cpu correction\r\n\r\n* feat: add more bench\r\n\r\n* fix: cpu correction\r\n\r\n* chore: add comment\r\n\r\n* fix: add unstable to tranform\r\n\r\n* fix: comment message\r\n\r\n* deno fmt",
          "timestamp": "2022-11-05T11:17:43-05:00",
          "tree_id": "567351b2a42bb4c5c98f795ac6575c556fb16630",
          "url": "https://github.com/discordeno/discordeno/commit/a385176d8a15c4be7f113d819cb558ecdbe9bf6d"
        },
        "date": 1667665159541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 3870,
            "unit": "ns/iter",
            "range": "2908.51 … 4020315.55"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 591,
            "unit": "ns/iter",
            "range": "506.64 … 1205.63"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 80,
            "unit": "ns/iter",
            "range": "59.6 … 595.78"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 73,
            "unit": "ns/iter",
            "range": "54.27 … 400.94"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 231,
            "unit": "ns/iter",
            "range": "192.71 … 272.15"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 802,
            "unit": "ns/iter",
            "range": "609.85 … 4231417.3"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 340,
            "unit": "ns/iter",
            "range": "269.38 … 1304.14"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 304,
            "unit": "ns/iter",
            "range": "259.21 … 386.75"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 275,
            "unit": "ns/iter",
            "range": "215.42 … 440.55"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 244,
            "unit": "ns/iter",
            "range": "215.77 … 318.69"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 395,
            "unit": "ns/iter",
            "range": "349.29 … 497.26"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 591,
            "unit": "ns/iter",
            "range": "530.1 … 680.22"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 149,
            "unit": "ns/iter",
            "range": "121.44 … 185.57"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 554,
            "unit": "ns/iter",
            "range": "441.06 … 1158.71"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 281.57,
            "unit": "MB",
            "range": "278.93 … 284.18"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 264.98,
            "unit": "MB",
            "range": "257.8 … 270.64"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 280.23,
            "unit": "MB",
            "range": "277.74 … 282.79"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "23035000+Skillz4Killz@users.noreply.github.com",
            "name": "Skillz4Killz",
            "username": "Skillz4Killz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76ea7d9a67a1a9e84d67c6f3008acdf8d2d0d494",
          "message": "Bucking Rest (#2588)\n\n* Pending changes exported from your codespace\r\n\r\n* fix: more testing needed\r\n\r\n* fix: try fix\r\n\r\n* fix: global shared scope erro\r\n\r\n* fix: cleanup console logs",
          "timestamp": "2022-11-14T12:17:29-06:00",
          "tree_id": "9d56e8c1021f2343a2ac44075290b80262e3382f",
          "url": "https://github.com/discordeno/discordeno/commit/76ea7d9a67a1a9e84d67c6f3008acdf8d2d0d494"
        },
        "date": 1668449928787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 9335,
            "unit": "ns/iter",
            "range": "8121.69 … 5927779.3"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1329,
            "unit": "ns/iter",
            "range": "1286.81 … 1740.36"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 172,
            "unit": "ns/iter",
            "range": "168.72 … 205.11"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 150,
            "unit": "ns/iter",
            "range": "142.06 … 554.84"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 476,
            "unit": "ns/iter",
            "range": "466.36 … 492.6"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1371,
            "unit": "ns/iter",
            "range": "1360.65 … 1402.84"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 642,
            "unit": "ns/iter",
            "range": "632.82 … 660.95"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 609,
            "unit": "ns/iter",
            "range": "595.16 … 1181.34"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 497,
            "unit": "ns/iter",
            "range": "487.12 … 512.53"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 500,
            "unit": "ns/iter",
            "range": "492.23 … 512.04"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 981,
            "unit": "ns/iter",
            "range": "975.64 … 1065.31"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 1160,
            "unit": "ns/iter",
            "range": "1149.69 … 1191.88"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 316,
            "unit": "ns/iter",
            "range": "310.75 … 330.58"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 1086,
            "unit": "ns/iter",
            "range": "1036.99 … 2563.08"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.59,
            "unit": "MB",
            "range": "278.32 … 281.16"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.81,
            "unit": "MB",
            "range": "261.94 … 271.97"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.74,
            "unit": "MB",
            "range": "277.59 … 281.15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63b88ee9492ae595a1c6b59d9be1fbed13f405de",
          "message": "chore(deps): bump loader-utils from 1.4.0 to 1.4.1 in /site (#2577)\n\nBumps [loader-utils](https://github.com/webpack/loader-utils) from 1.4.0 to 1.4.1.\r\n- [Release notes](https://github.com/webpack/loader-utils/releases)\r\n- [Changelog](https://github.com/webpack/loader-utils/blob/v1.4.1/CHANGELOG.md)\r\n- [Commits](https://github.com/webpack/loader-utils/compare/v1.4.0...v1.4.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: loader-utils\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-14T12:17:51-06:00",
          "tree_id": "58a87fb2c28d1e87d92c9123b0e434513c9047b2",
          "url": "https://github.com/discordeno/discordeno/commit/63b88ee9492ae595a1c6b59d9be1fbed13f405de"
        },
        "date": 1668449948643,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 10414,
            "unit": "ns/iter",
            "range": "8026.85 … 12769034.85"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1310,
            "unit": "ns/iter",
            "range": "1277.96 … 1468.07"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 171,
            "unit": "ns/iter",
            "range": "167.18 … 200.92"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 147,
            "unit": "ns/iter",
            "range": "139.6 … 570.39"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 458,
            "unit": "ns/iter",
            "range": "450.91 … 473.71"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1341,
            "unit": "ns/iter",
            "range": "1341.33 … 1362.45"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 623,
            "unit": "ns/iter",
            "range": "614.41 … 638.1"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 612,
            "unit": "ns/iter",
            "range": "601.48 … 624.94"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 495,
            "unit": "ns/iter",
            "range": "486.77 … 511.34"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 503,
            "unit": "ns/iter",
            "range": "495.51 … 540.57"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 837,
            "unit": "ns/iter",
            "range": "827.27 … 1012.67"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 1162,
            "unit": "ns/iter",
            "range": "1151.22 … 1225.15"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 318,
            "unit": "ns/iter",
            "range": "312.99 … 334.7"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 1088,
            "unit": "ns/iter",
            "range": "1040.59 … 2735.47"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 278.35,
            "unit": "MB",
            "range": "277.18 … 279.34"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 263.2,
            "unit": "MB",
            "range": "260.65 … 264.67"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 277.98,
            "unit": "MB",
            "range": "277.32 … 278.75"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RanAwaySuccessfully@users.noreply.github.com",
            "name": "RanAS",
            "username": "RanAwaySuccessfully"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58ac893c3a5b96464f3f6be0f8fc45273b106812",
          "message": "calculateBasePermissions may not correctly retrieve cached members (#2580)\n\n* fix: this might be an oversight\r\n\r\n* Update plugins/permissions/src/permissions.ts\r\n\r\n* Update plugins/permissions/src/permissions.ts\r\n\r\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2022-11-14T12:26:30-06:00",
          "tree_id": "988b0800f6a06a124ec679ac3f5fe3e98024e3d4",
          "url": "https://github.com/discordeno/discordeno/commit/58ac893c3a5b96464f3f6be0f8fc45273b106812"
        },
        "date": 1668450469507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 4307,
            "unit": "ns/iter",
            "range": "3897.35 … 2920543.2"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1026,
            "unit": "ns/iter",
            "range": "1006.4 … 1110"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 86,
            "unit": "ns/iter",
            "range": "84.56 … 94.72"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 72,
            "unit": "ns/iter",
            "range": "69.88 … 273.78"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 230,
            "unit": "ns/iter",
            "range": "225.25 … 245.84"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 651,
            "unit": "ns/iter",
            "range": "636.4 … 888"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 308,
            "unit": "ns/iter",
            "range": "301.61 … 312.2"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 308,
            "unit": "ns/iter",
            "range": "301.52 … 312.67"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 245,
            "unit": "ns/iter",
            "range": "239.25 … 263.18"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 248,
            "unit": "ns/iter",
            "range": "242.93 … 280.01"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 448,
            "unit": "ns/iter",
            "range": "444.55 … 498.27"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 562,
            "unit": "ns/iter",
            "range": "557.47 … 587.07"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 155,
            "unit": "ns/iter",
            "range": "152.98 … 164.41"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 513,
            "unit": "ns/iter",
            "range": "486.49 … 1213.6"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.33,
            "unit": "MB",
            "range": "276.04 … 281.42"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.64,
            "unit": "MB",
            "range": "261.34 … 271.73"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 280.16,
            "unit": "MB",
            "range": "277.59 … 282.16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84cd7165e23338d1f5d8ac5d29bd6256d400eaa0",
          "message": "types: add SortOrderTypes and default_sort_order to DiscordChannel, helpers: add defaultSortOrder to createChannel and editChannel options (#2582)\n\n* types: add SortOrderTypes and default_sort_order to DiscordChannel\r\nhelpers: add defaultSortOrder to createChannel and editChannel options\r\n\r\n* Update types/discord.ts\r\n\r\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2022-11-14T12:31:45-06:00",
          "tree_id": "4ea47793fcac13eed5ab769c1213b8640630ac0d",
          "url": "https://github.com/discordeno/discordeno/commit/84cd7165e23338d1f5d8ac5d29bd6256d400eaa0"
        },
        "date": 1668450778397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 280.56,
            "unit": "MB",
            "range": "277.05 … 282.96"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 261.77,
            "unit": "MB",
            "range": "260.92 … 263.36"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 281.33,
            "unit": "MB",
            "range": "281 … 281.78"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23897b7fcbdef2c67adaac79d6d7cf336e8f70f8",
          "message": "helpers: Add missing properties for create guild channel (#2581)\n\n* helpers: Add missing properties for create guild channel\r\n\r\n* Update helpers/channels/createChannel.ts\r\n\r\n* Update helpers/channels/createChannel.ts\r\n\r\n* Update helpers/channels/createChannel.ts\r\n\r\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2022-11-14T12:32:41-06:00",
          "tree_id": "7a43b418070815b0eb228b65e57d027c0b18665a",
          "url": "https://github.com/discordeno/discordeno/commit/23897b7fcbdef2c67adaac79d6d7cf336e8f70f8"
        },
        "date": 1668450828738,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.09,
            "unit": "MB",
            "range": "276.3 … 281.67"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.69,
            "unit": "MB",
            "range": "261.74 … 271.81"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.92,
            "unit": "MB",
            "range": "277.86 … 281.15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd5915c8b664bed1a7b5166745a034a74c42e7f6",
          "message": "add new select menu components (#2583)\n\n* add new select menu components\r\n\r\n* fix: check for component type",
          "timestamp": "2022-11-14T12:34:41-06:00",
          "tree_id": "8c7b8e6af6a565944cf259687b3daf2481410ecd",
          "url": "https://github.com/discordeno/discordeno/commit/cd5915c8b664bed1a7b5166745a034a74c42e7f6"
        },
        "date": 1668450948708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 278.87,
            "unit": "MB",
            "range": "276.05 … 281.16"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.51,
            "unit": "MB",
            "range": "262.05 … 271.35"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.69,
            "unit": "MB",
            "range": "277.59 … 281"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e995a651ce1efdfbf125b198bc8f0d064df26db7",
          "message": "role name must be less than 100 characters (#2584)",
          "timestamp": "2022-11-14T12:35:02-06:00",
          "tree_id": "f054d558aa8bc8c92704a25e69afd1d479dd2238",
          "url": "https://github.com/discordeno/discordeno/commit/e995a651ce1efdfbf125b198bc8f0d064df26db7"
        },
        "date": 1668450995557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.4,
            "unit": "MB",
            "range": "276.68 … 282.96"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 264.66,
            "unit": "MB",
            "range": "260.64 … 271.72"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.99,
            "unit": "MB",
            "range": "277.86 … 281.52"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1ba1ae90dbc4cabaa17876540b4bcf1ce855ba6",
          "message": "delete follow up and original now support ephemeral (#2585)",
          "timestamp": "2022-11-14T12:35:40-06:00",
          "tree_id": "7a02c4c9f2833ea5fe4209e4bd302aea741a03b6",
          "url": "https://github.com/discordeno/discordeno/commit/e1ba1ae90dbc4cabaa17876540b4bcf1ce855ba6"
        },
        "date": 1668451009116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 280.14,
            "unit": "MB",
            "range": "276.3 … 282.7"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.4,
            "unit": "MB",
            "range": "260.93 … 271.76"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 280.04,
            "unit": "MB",
            "range": "277.86 … 281.52"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65b753455116e8109e2cb1fca62e7bd25f1c5cbd",
          "message": "public thread can be in forum channel (#2586)\n\n* public thread can be in forum channel\r\n\r\n* Update types/shared.ts\r\n\r\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2022-11-14T12:36:20-06:00",
          "tree_id": "529a71fff92bf7f05bb547d076f7226f865549f4",
          "url": "https://github.com/discordeno/discordeno/commit/65b753455116e8109e2cb1fca62e7bd25f1c5cbd"
        },
        "date": 1668451049144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 279.84,
            "unit": "MB",
            "range": "278.58 … 281.16"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.8,
            "unit": "MB",
            "range": "262.14 … 271.81"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.99,
            "unit": "MB",
            "range": "277.86 … 281.63"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gankstarsleague@gmail.com",
            "name": "Skillz",
            "username": "Skillz4Killz"
          },
          "committer": {
            "email": "gankstarsleague@gmail.com",
            "name": "Skillz",
            "username": "Skillz4Killz"
          },
          "distinct": true,
          "id": "0628d849e4f1576db7c20bc947965fc94927654b",
          "message": "fix: remove debugs",
          "timestamp": "2022-11-14T12:54:55-06:00",
          "tree_id": "102a8b96209597b52f9cc89c9cf7f8a3278b057e",
          "url": "https://github.com/discordeno/discordeno/commit/0628d849e4f1576db7c20bc947965fc94927654b"
        },
        "date": 1668452192675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 280.73,
            "unit": "MB",
            "range": "278.34 … 282.44"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.38,
            "unit": "MB",
            "range": "261.09 … 271.7"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.86,
            "unit": "MB",
            "range": "277.59 … 281.26"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@afink.dev",
            "name": "Andreas Fink",
            "username": "AFink"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e59ec94f55202df6c8e3f6184c955e25a8c2132c",
          "message": "BREAKING: fix(plugins/validations): remove bot arg from validateApplicationCommandLength, fixes #2543 (#2553)",
          "timestamp": "2022-11-14T13:02:43-06:00",
          "tree_id": "c10c114d3821c8e10ead6f69935627d1f68b5aa1",
          "url": "https://github.com/discordeno/discordeno/commit/e59ec94f55202df6c8e3f6184c955e25a8c2132c"
        },
        "date": 1668452647049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Cache Plugin] RSS",
            "value": 277.95,
            "unit": "MB",
            "range": "276.31 … 280.28"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.16,
            "unit": "MB",
            "range": "261.16 … 272.18"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.8,
            "unit": "MB",
            "range": "277.86 … 281.89"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48591478+H01001000@users.noreply.github.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a1887462d2221135cee75cf527a94250363f2ab",
          "message": "Fix: typing (#2589)\n\n* deno fmt\r\n\r\n* import SortOrderTypes\r\n\r\n* add bigString to reverse snowflake",
          "timestamp": "2022-11-14T15:49:25-06:00",
          "tree_id": "8234925554cd63dcb4dfa3cec7656a457eb81ac2",
          "url": "https://github.com/discordeno/discordeno/commit/5a1887462d2221135cee75cf527a94250363f2ab"
        },
        "date": 1668462651937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 9418,
            "unit": "ns/iter",
            "range": "8235.24 … 6218662"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1309,
            "unit": "ns/iter",
            "range": "1277.52 … 1499.24"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 174,
            "unit": "ns/iter",
            "range": "169.43 … 236.29"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 149,
            "unit": "ns/iter",
            "range": "143.38 … 539.24"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 479,
            "unit": "ns/iter",
            "range": "466.16 … 591.85"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1383,
            "unit": "ns/iter",
            "range": "1361.98 … 1668.16"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 650,
            "unit": "ns/iter",
            "range": "636.21 … 672.06"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 614,
            "unit": "ns/iter",
            "range": "600.22 … 662.6"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 727,
            "unit": "ns/iter",
            "range": "527.9 … 7739014"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 526,
            "unit": "ns/iter",
            "range": "496.35 … 2280.53"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 988,
            "unit": "ns/iter",
            "range": "976.42 … 1087.47"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 1182,
            "unit": "ns/iter",
            "range": "1171.94 … 1214.17"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 320,
            "unit": "ns/iter",
            "range": "315.19 … 448.93"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 1109,
            "unit": "ns/iter",
            "range": "1053.24 … 2692.29"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 277.81,
            "unit": "MB",
            "range": "275.28 … 281.42"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 262.79,
            "unit": "MB",
            "range": "261.27 … 263.66"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 278.72,
            "unit": "MB",
            "range": "276.87 … 280.74"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lts20050703@gmail.com",
            "name": "LTS20050703",
            "username": "lts20050703"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f615e8520ca11e5e9885fec663488eb8be4b26a9",
          "message": "helpers: add appliedTags to editHelper options (#2590)",
          "timestamp": "2022-11-15T14:37:03-06:00",
          "tree_id": "6c10f5d8d1e800e6a60461588d39ee56e5abb3bb",
          "url": "https://github.com/discordeno/discordeno/commit/f615e8520ca11e5e9885fec663488eb8be4b26a9"
        },
        "date": 1668544709963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 4311,
            "unit": "ns/iter",
            "range": "3900.98 … 4355271.9"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1042,
            "unit": "ns/iter",
            "range": "1012.28 … 1456.7"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 86,
            "unit": "ns/iter",
            "range": "84.2 … 313.89"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 72,
            "unit": "ns/iter",
            "range": "69.47 … 297.58"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 228,
            "unit": "ns/iter",
            "range": "223.81 … 234.71"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 637,
            "unit": "ns/iter",
            "range": "637 … 661.69"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 304,
            "unit": "ns/iter",
            "range": "297.69 … 557.99"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 300,
            "unit": "ns/iter",
            "range": "296.68 … 303.84"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 244,
            "unit": "ns/iter",
            "range": "237.98 … 553.05"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 244,
            "unit": "ns/iter",
            "range": "240.83 … 271.56"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 442,
            "unit": "ns/iter",
            "range": "439.87 … 493.8"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 568,
            "unit": "ns/iter",
            "range": "562.93 … 582.68"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 155,
            "unit": "ns/iter",
            "range": "153.31 … 160.86"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 499,
            "unit": "ns/iter",
            "range": "474.18 … 1219.67"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 278.68,
            "unit": "MB",
            "range": "276.31 … 281.16"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 269.02,
            "unit": "MB",
            "range": "263.58 … 271.95"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 278.73,
            "unit": "MB",
            "range": "277.86 … 280.48"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ad03ac56216ba1a64ea773b187a218dca34f798",
          "message": "chore(deps): bump loader-utils from 1.4.1 to 1.4.2 in /site (#2591)\n\nBumps [loader-utils](https://github.com/webpack/loader-utils) from 1.4.1 to 1.4.2.\r\n- [Release notes](https://github.com/webpack/loader-utils/releases)\r\n- [Changelog](https://github.com/webpack/loader-utils/blob/v1.4.2/CHANGELOG.md)\r\n- [Commits](https://github.com/webpack/loader-utils/compare/v1.4.1...v1.4.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: loader-utils\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-17T09:04:14-06:00",
          "tree_id": "6a2e8dd175d59bfb4fad35e1834135f35b3cd88e",
          "url": "https://github.com/discordeno/discordeno/commit/5ad03ac56216ba1a64ea773b187a218dca34f798"
        },
        "date": 1668697553992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 5540,
            "unit": "ns/iter",
            "range": "3660.17 … 7456053.15"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1119,
            "unit": "ns/iter",
            "range": "1032.25 … 1529.87"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 94,
            "unit": "ns/iter",
            "range": "84.57 … 339.96"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 73,
            "unit": "ns/iter",
            "range": "67.31 … 223.25"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 233,
            "unit": "ns/iter",
            "range": "220.99 … 243.17"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 650,
            "unit": "ns/iter",
            "range": "641.56 … 670.35"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 312,
            "unit": "ns/iter",
            "range": "302.7 … 357.82"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 306,
            "unit": "ns/iter",
            "range": "299.15 … 335.18"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 245,
            "unit": "ns/iter",
            "range": "237.42 … 307.98"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 249,
            "unit": "ns/iter",
            "range": "236.55 … 330.82"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 448,
            "unit": "ns/iter",
            "range": "440.04 … 530.52"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 592,
            "unit": "ns/iter",
            "range": "583.98 … 625.11"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 156,
            "unit": "ns/iter",
            "range": "150.79 … 163.14"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 514,
            "unit": "ns/iter",
            "range": "481.17 … 1209.09"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 280.9,
            "unit": "MB",
            "range": "278.58 … 282.7"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.32,
            "unit": "MB",
            "range": "260.52 … 271.98"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 280.04,
            "unit": "MB",
            "range": "277.86 … 281.52"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dannyjmay97@gmail.com",
            "name": "Danny May",
            "username": "danny-may"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0910965de54c21738d314d257cefdb4afcdc4cdd",
          "message": "Fix sending files through a rest proxy (#2593)\n\n* Fix rest proxy not working with files\r\n\r\n* Fix some credits\r\n\r\n* Add tests\r\n\r\n* Fix test\r\n\r\n* Remove some usage of any\r\n\r\n* Fix mime matching\r\n\r\n* Fix formatting issues",
          "timestamp": "2022-11-20T16:50:50-06:00",
          "tree_id": "1530f0c1da09a69df17ed4eee56ae0d48c1ab2ba",
          "url": "https://github.com/discordeno/discordeno/commit/0910965de54c21738d314d257cefdb4afcdc4cdd"
        },
        "date": 1668984732200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "[Transformer] Discord Guild to a Guild",
            "value": 9461,
            "unit": "ns/iter",
            "range": "8235.98 … 8668897.95"
          },
          {
            "name": "[Guild.toggles.features] Get the features of a guild",
            "value": 1309,
            "unit": "ns/iter",
            "range": "1277.63 … 1541.61"
          },
          {
            "name": "[Transformer] Discord User to a User",
            "value": 187,
            "unit": "ns/iter",
            "range": "184.03 … 215.97"
          },
          {
            "name": "[Transformer] User to a Discord User",
            "value": 150,
            "unit": "ns/iter",
            "range": "143.72 … 527.41"
          },
          {
            "name": "[Transformer] Discord Rules Channel to a Rules Channel",
            "value": 489,
            "unit": "ns/iter",
            "range": "481.7 … 511.25"
          },
          {
            "name": "[Transformer] Discord Announcement Channel to a Announcement Channel",
            "value": 1383,
            "unit": "ns/iter",
            "range": "1372.66 … 1404.34"
          },
          {
            "name": "[Transformer] Discord Moderator Channel to a Moderator Channel",
            "value": 620,
            "unit": "ns/iter",
            "range": "610.65 … 639.78"
          },
          {
            "name": "[Transformer] Discord Text Channel to a Text Channel",
            "value": 618,
            "unit": "ns/iter",
            "range": "609.28 … 624.09"
          },
          {
            "name": "[Transformer] Discord Stage Channel to a Stage Channel",
            "value": 494,
            "unit": "ns/iter",
            "range": "486.6 … 510.02"
          },
          {
            "name": "[Transformer] Discord Voice Channel to a Voice Channel",
            "value": 503,
            "unit": "ns/iter",
            "range": "496.21 … 510.93"
          },
          {
            "name": "[Transformer] Discord Member to a Member",
            "value": 981,
            "unit": "ns/iter",
            "range": "975.93 … 1066.45"
          },
          {
            "name": "[Transformer] Member to a Discord Member",
            "value": 1183,
            "unit": "ns/iter",
            "range": "1172.04 … 1203.72"
          },
          {
            "name": "[Transformer] Discord Role to a Role",
            "value": 321,
            "unit": "ns/iter",
            "range": "316.77 … 333.73"
          },
          {
            "name": "[Transformer] Discord Message to a Message",
            "value": 1088,
            "unit": "ns/iter",
            "range": "1038.67 … 2639.74"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 280.05,
            "unit": "MB",
            "range": "275.78 … 282.7"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 265.54,
            "unit": "MB",
            "range": "260.79 … 272.13"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 279.86,
            "unit": "MB",
            "range": "277.33 … 281.52"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "endy@endy3032.ml",
            "name": "Endy",
            "username": "Endy3032"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37aa4198c203c7e4a0631f32ea036d1341473520",
          "message": "feat(bot): add more helper functions to `BaseInteraction` (#3018)\n\n* Add more helper functions for `BaseInteraction`\n\n- Breaking changes for `respond`\n  - `response` now takes `InteractionCallbackData`\n  - `options` is now `ephemeral: boolean`\n- Added `edit`, `defer` and `delete`\n\n* Add comments and `acknowledged` check for `defer`\n\n* Update packages/bot/src/transformers/interaction.ts\n\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>\n\n* Revert `respond` options, rename `ephemeral` to `private`\n\n* Fix typo\n\n* Fix arg name\n\n- Renamed `private` to `isPrivate` to prevent reserved name collision\n- Optional chaining for `options`\n\n* Apply suggestions from code review\n\n---------\n\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2023-05-05T15:52:49Z",
          "tree_id": "62e70bc75f1d3b46b9bb64553f9b94a5e38a0254",
          "url": "https://github.com/8auu/discordeno/commit/37aa4198c203c7e4a0631f32ea036d1341473520"
        },
        "date": 1683322255700,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 86.29,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 86.84,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 70.71,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 65.1,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 87.24,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 64.41,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.58,
            "range": "±3.02%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.64,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 224715,
            "range": "±0.18%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6599,
            "range": "±0.15%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6596,
            "range": "±0.12%",
            "unit": "ops/sec",
            "extra": "97 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "endy@endy3032.ml",
            "name": "Endy",
            "username": "Endy3032"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37aa4198c203c7e4a0631f32ea036d1341473520",
          "message": "feat(bot): add more helper functions to `BaseInteraction` (#3018)\n\n* Add more helper functions for `BaseInteraction`\n\n- Breaking changes for `respond`\n  - `response` now takes `InteractionCallbackData`\n  - `options` is now `ephemeral: boolean`\n- Added `edit`, `defer` and `delete`\n\n* Add comments and `acknowledged` check for `defer`\n\n* Update packages/bot/src/transformers/interaction.ts\n\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>\n\n* Revert `respond` options, rename `ephemeral` to `private`\n\n* Fix typo\n\n* Fix arg name\n\n- Renamed `private` to `isPrivate` to prevent reserved name collision\n- Optional chaining for `options`\n\n* Apply suggestions from code review\n\n---------\n\nCo-authored-by: Skillz4Killz <23035000+Skillz4Killz@users.noreply.github.com>",
          "timestamp": "2023-05-05T15:52:49Z",
          "tree_id": "62e70bc75f1d3b46b9bb64553f9b94a5e38a0254",
          "url": "https://github.com/8auu/discordeno/commit/37aa4198c203c7e4a0631f32ea036d1341473520"
        },
        "date": 1683322274906,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 86.43,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 86.47,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 70.18,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 27.66,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 87.08,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 63.89,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.71,
            "range": "±2.85%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.77,
            "range": "±1.43%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 224801,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6577,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6535,
            "range": "±0.16%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "23035000+Skillz4Killz@users.noreply.github.com",
            "name": "Skillz4Killz",
            "username": "Skillz4Killz"
          },
          "committer": {
            "email": "23035000+Skillz4Killz@users.noreply.github.com",
            "name": "Skillz4Killz",
            "username": "Skillz4Killz"
          },
          "distinct": true,
          "id": "4a6e22d1924916e15fcc96f9f59a4733a0275d52",
          "message": "fix: benchmark type bug",
          "timestamp": "2023-05-05T23:42:14Z",
          "tree_id": "bc439eb8928dd65856b415f4cbf2d3a5d23b9d27",
          "url": "https://github.com/8auu/discordeno/commit/4a6e22d1924916e15fcc96f9f59a4733a0275d52"
        },
        "date": 1683352960032,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 124.84,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 119.59,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 105.05,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 33.16,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 102.78,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 79.36,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.7,
            "range": "±2.87%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.71,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 222096,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6318,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 5998,
            "range": "±0.30%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heiheiho000@gmail.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d1ba2a1ccb2dcff5836b26b6cb80acd5b399af1",
          "message": "test(rest): fix test for new user system (#3057)\n\n* test(rest): fix test for new user system\n\n* Update user.spec.ts",
          "timestamp": "2023-06-18T22:20:31Z",
          "tree_id": "f873c546b20b75717c1f807b0c8bbfa922b5dd12",
          "url": "https://github.com/8auu/discordeno/commit/8d1ba2a1ccb2dcff5836b26b6cb80acd5b399af1"
        },
        "date": 1688417960077,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 121.48,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.45,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.62,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 80.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.32,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 82.24,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.68,
            "range": "±2.99%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.65,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 214168,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6296,
            "range": "±0.39%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6299,
            "range": "±0.40%",
            "unit": "ops/sec",
            "extra": "89 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "heiheiho000@gmail.com",
            "name": "Jonathan Ho",
            "username": "H01001000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d1ba2a1ccb2dcff5836b26b6cb80acd5b399af1",
          "message": "test(rest): fix test for new user system (#3057)\n\n* test(rest): fix test for new user system\n\n* Update user.spec.ts",
          "timestamp": "2023-06-18T22:20:31Z",
          "tree_id": "f873c546b20b75717c1f807b0c8bbfa922b5dd12",
          "url": "https://github.com/8auu/discordeno/commit/8d1ba2a1ccb2dcff5836b26b6cb80acd5b399af1"
        },
        "date": 1688418005495,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 122.41,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.71,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.09,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.71,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 84.6,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.7,
            "range": "±2.89%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.67,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 215340,
            "range": "±0.25%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6249,
            "range": "±0.21%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6209,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "95 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "committer": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "distinct": true,
          "id": "b7bf6275735c29c02f684acb707e02f27a8c23d5",
          "message": "fix: Fixed an issue which would cause the 'INVITE_DELETE' event to be passed into 'INVITE_CREATE'.",
          "timestamp": "2023-07-03T22:03:56+01:00",
          "tree_id": "8aef57b07be7b75d3d7426423111446fd2aeba18",
          "url": "https://github.com/8auu/discordeno/commit/b7bf6275735c29c02f684acb707e02f27a8c23d5"
        },
        "date": 1688418441953,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 111.92,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.47,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 107.14,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.32,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 78.05,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.61,
            "range": "±2.8%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.65,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 212577,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 5997,
            "range": "±0.32%",
            "unit": "ops/sec",
            "extra": "94 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6064,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "95 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "committer": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "distinct": true,
          "id": "847af8cac08235952d3751949441a2ad8d78f864",
          "message": "chore: removed duplicate line in the message transformer",
          "timestamp": "2023-07-09T17:36:27+01:00",
          "tree_id": "7a4049c9c1e4f2df45018b18ec3b0d9c17cfdb9c",
          "url": "https://github.com/8auu/discordeno/commit/847af8cac08235952d3751949441a2ad8d78f864"
        },
        "date": 1688920652692,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 120.31,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 116.65,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.62,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 82.15,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 100.27,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 83.29,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.67,
            "range": "±2.99%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.75,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 209972,
            "range": "±0.36%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6213,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6198,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "97 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "awesome@stickz.dev",
            "name": "Awesome Stickz",
            "username": "AwesomeStickz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3445211091d77785879ef412bace7611173d91af",
          "message": "fix(docs): set ListGuildMembers options.limit default to 1 (#3065)",
          "timestamp": "2023-07-23T21:00:27Z",
          "tree_id": "02f8d4eed38d3ad5cfe72e3694f8b8b806ce16c1",
          "url": "https://github.com/8auu/discordeno/commit/3445211091d77785879ef412bace7611173d91af"
        },
        "date": 1691119573683,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 121.42,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.4,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 107.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 79.81,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 100.32,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 80.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.66,
            "range": "±3.02%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.67,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 206962,
            "range": "±0.26%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6166,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6085,
            "range": "±0.35%",
            "unit": "ops/sec",
            "extra": "94 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "endy@endy3032.ml",
            "name": "Endy",
            "username": "Endy3032"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d0f76ec5c4f60d56c594e88fa747d5e15821ea1",
          "message": "fix(bot): channel transformer bitrate prop (#3100)",
          "timestamp": "2023-08-08T16:38:23Z",
          "tree_id": "7d1a2ddc26ddaa9432c40f3cfb6b5c11b461e60c",
          "url": "https://github.com/8auu/discordeno/commit/2d0f76ec5c4f60d56c594e88fa747d5e15821ea1"
        },
        "date": 1691606705840,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 122.99,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.62,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.09,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 76.65,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.73,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 78.31,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.7,
            "range": "±2.93%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.63,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 202303,
            "range": "±1.03%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6037,
            "range": "±0.28%",
            "unit": "ops/sec",
            "extra": "93 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 5968,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "91 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gankstarsleague@gmail.com",
            "name": "Skillz",
            "username": "Skillz4Killz"
          },
          "committer": {
            "email": "gankstarsleague@gmail.com",
            "name": "Skillz",
            "username": "Skillz4Killz"
          },
          "distinct": true,
          "id": "c92649029b0321a196aa25f009fa70d7e10e5c59",
          "message": "Merge branch 'main' of https://github.com/discordeno/discordeno into main",
          "timestamp": "2023-09-14T09:44:16-05:00",
          "tree_id": "a8ddd7070c5daedddb5f4b7e0b2c0e1ae3afffaa",
          "url": "https://github.com/8auu/discordeno/commit/c92649029b0321a196aa25f009fa70d7e10e5c59"
        },
        "date": 1695012551191,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 115.44,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.08,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 106.36,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 82.76,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 100.88,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 81.72,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.66,
            "range": "±2.98%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.71,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 206238,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6350,
            "range": "±0.17%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6335,
            "range": "±0.11%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "committer": {
            "email": "logancross02@me.com",
            "name": "8auu",
            "username": "8auu"
          },
          "distinct": true,
          "id": "77ef522ed12eccaebb11b0461c57ed3a3e55d139",
          "message": "feat: made some progress on a function which can be overridden to allow users to inject custom headers into a rest request",
          "timestamp": "2023-09-18T05:51:26+01:00",
          "tree_id": "a186145058d02d3db2b3ec09a5a633e7423eaf3a",
          "url": "https://github.com/8auu/discordeno/commit/77ef522ed12eccaebb11b0461c57ed3a3e55d139"
        },
        "date": 1695012780998,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 119.88,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 117.38,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 105.83,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 86.97,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.34,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 81.19,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.57,
            "range": "±2.98%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.88,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 203497,
            "range": "±0.31%",
            "unit": "ops/sec",
            "extra": "96 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6088,
            "range": "±0.34%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6061,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "95 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45788465+SammyWhamy@users.noreply.github.com",
            "name": "Sam Teeuwisse",
            "username": "SammyWhamy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "940ef8dc3964a46a914dfe29f344b85fda2c2403",
          "message": "fix(utils): Add missing export for interactions.ts (#3123)",
          "timestamp": "2023-09-19T16:25:36Z",
          "tree_id": "064d78eabd17611f392f93dbd3f4b144164d7b6e",
          "url": "https://github.com/8auu/discordeno/commit/940ef8dc3964a46a914dfe29f344b85fda2c2403"
        },
        "date": 1695143404560,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 117.66,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 116.81,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 107.67,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 77.34,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 101.13,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 78.57,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.57,
            "range": "±2.98%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.75,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 205469,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6216,
            "range": "±0.24%",
            "unit": "ops/sec",
            "extra": "97 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6166,
            "range": "±0.20%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45788465+SammyWhamy@users.noreply.github.com",
            "name": "Sam Teeuwisse",
            "username": "SammyWhamy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1355d540354cf5d53048ed3c8a9d8f41fc71cd87",
          "message": "Fix commandOptionsParser and move to bot package (#3135)",
          "timestamp": "2023-09-20T14:04:41Z",
          "tree_id": "aca8eb90dd4d8cd27f8f5ccc4f67d3454a8dea2a",
          "url": "https://github.com/8auu/discordeno/commit/1355d540354cf5d53048ed3c8a9d8f41fc71cd87"
        },
        "date": 1695224807846,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "[transformer] message cache check RSS",
            "value": 116.63,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Used",
            "value": 118.22,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] message cache check Heap Total",
            "value": 107.14,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check RSS",
            "value": 83.06,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Used",
            "value": 102.43,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[transformer] old message cache check Heap Total",
            "value": 80.14,
            "range": "±1%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] RSS",
            "value": 0.7,
            "range": "±3%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Used",
            "value": 10.66,
            "range": "±1.44%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "[Cache Plugin] Heap Total",
            "value": 0,
            "range": "±0%",
            "unit": "MB",
            "extra": "3 samples"
          },
          {
            "name": "rest.simplifyUrl",
            "value": 203901,
            "range": "±0.29%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Camelize 1 event",
            "value": 6067,
            "range": "±0.27%",
            "unit": "ops/sec",
            "extra": "95 samples"
          },
          {
            "name": "Snakelize 1 event",
            "value": 6054,
            "range": "±0.23%",
            "unit": "ops/sec",
            "extra": "96 samples"
          }
        ]
      }
    ]
  }
}