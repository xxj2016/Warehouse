/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(793ede49d53dba79d39e52205f16321278f5183c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ja",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (再発)"],"vs/base/browser/ui/findinput/findInput":["正規表現を使用する","単語単位で検索する","大文字と小文字を区別する","入力"],"vs/base/browser/ui/inputbox/inputBox":["エラー: {0}","警告: {0}","情報: {0}"],"vs/base/common/errors":["{0}。エラー コード: {1}","アクセス許可が拒否されました (HTTP {0})","アクセス許可が拒否されました","{0} (HTTP {1}: {2})","{0} (HTTP {1})","不明な接続エラー ({0})","不明な接続エラーが発生しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。","{0}: {1}","不明なエラーが発生しました。ログで詳細を確認してください。","システム エラーが発生しました ({0})","不明なエラーが発生しました。ログで詳細を確認してください。","{0} (合計 {1} エラー)","不明なエラーが発生しました。ログで詳細を確認してください。","実装されていません","無効な引数: {0}","無効な引数","無効な状態: {0}","無効な状態","必要なファイルを読み込みに失敗しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。ブラウザーを更新して、もう一度やり直してください。","必要なファイルの読み込みに失敗しました。アプリケーションを再起動してもう一度試してください。詳細: {0}"],"vs/base/common/json":["シンボルが無効です","数値表示形式が無効です","プロパティ名が必要です","値が必要です","コロンが必要です","コンマが必要です","右中かっこが必要です","右角かっこが必要です","ファイルの終わりが必要です"],"vs/base/common/keyCodes":["Windows","コントロール","Shift","Alt","コマンド","Windows","Ctrl","Shift","Alt","コマンド","Windows"],"vs/base/common/severity":["エラー","警告","情報"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}、選択","選択"],"vs/base/parts/quickopen/browser/quickOpenWidget":["クイック選択。入力すると結果が絞り込まれます。","クイック選択"],"vs/base/parts/tree/browser/treeDefaults":["Collapse"],"vs/editor/browser/standalone/standaloneSchemas":["JSON schema for ASP.NET project.json files","Compilation options that are passed through to Roslyn","The version of the dependency.","The type of the dependency. 'build' dependencies only exist at build time","The dependencies of the application. Each entry specifes the name and the version of a Nuget package.","A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version","The author of the application","List of files to exclude from publish output (kpm bundle).","Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","Commands that are available for this application","Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.","The description of the application","Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).","Target frameworks that will be built, and dependencies that are specific to the configuration.","Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).","Glob pattern to indicate all the files that need to be compiled as resources.","Scripts to execute during the various stages.","Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","The version of the application. Example: 1.2.0.0","Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.","JSON schema for Bower configuration files","Any property starting with _ is valid.","The name of your package.","Help users identify and search for your package with a brief description.","A semantic version number.","The primary acting files necessary to use your package.","SPDX license identifier or path/url to a license.","A list of files for Bower to ignore when installing your package.","Used for search by keyword. Helps make your package easier to discover without people needing to know its name.","A list of people that authored the contents of the package.","URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.","The repository in which the source code can be found.","Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.","Dependencies that are only needed for development of the package, e.g., test framework or building documentation.","Dependency versions to automatically resolve with if conflicts occur between packages.","If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.","Used by grunt-bower-task to specify custom install locations.","The types of modules this package exposes","NPM configuration for this package.","A person who has been involved in creating or maintaining this package","Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.","Any property starting with _ is valid.","The name of the package.","Version must be parseable by node-semver, which is bundled with npm as a dependency.","This helps people discover your package, as it's listed in 'npm search'.","The relative path to the icon of the package.","This helps people discover your package as it's listed in 'npm search'.","The url to the project homepage.","The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.","The url to your project's issue tracker.","The email address to which issues should be reported.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","A list of people who contributed to this package.","A list of people who maintains this package.","The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.","The main field is a module ID that is the primary entry point to your program.","Specify either a single file or an array of filenames to put in place for the man program to find.","If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.","Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.","Put example scripts in here. Someday, it might be exposed in some clever way.","Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.","A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.","Specify the place where your code lives. This is helpful for people who want to contribute.","The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.","A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.","Array of package names that will be bundled when publishing the package.","Array of package names that will be bundled when publishing the package.","If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.","If set to true, then npm will refuse to publish it.","JSON schema for the ASP.NET global configuration files","A list of project folders relative to this file.","A list of source folders relative to this file.","The runtime to use.","The runtime version to use.","The runtime to use, e.g. coreclr","The runtime architecture to use, e.g. x64.","JSON schema for the TypeScript compiler's configuration file","Instructs the TypeScript compiler how to compile .ts files","The character set of the input files","Generates corresponding d.ts files.","Show diagnostic information.","Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","Emit a single file with source maps instead of having a separate file.","Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.","Print names of files part of the compilation.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.","Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)","Do not emit output.","Do not emit outputs if any type checking errors were reported.","Do not generate custom helper functions like __extends in compiled output.","Warn on expressions and declarations with an implied 'any' type.","Do not include the default library file (lib.d.ts).","Do not add triple-slash references or module import targets to the list of compiled files.","Concatenate and emit output to single file.","Redirect output structure to the directory.","Do not erase const enum declarations in generated code.","Do not emit comments to output.","Specifies the root directory of input files. Use to control the output directory structure with --outDir.","Generates corresponding '.map' file.","Specifies the location where debugger should locate TypeScript files instead of source locations.","Suppress noImplicitAny errors for indexing objects lacking index signatures.","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Watch input files.","Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.","Emits meta data.for ES7 decorators.","Supports transpiling single TS files into JS files.","Enables experimental support for ES7 decorators.","Enables experimental support for async functions (requires TypeScript 1.6).","If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","JSON schema for the JavaScript configuration file","Instructs the JavaScript language service how to validate .js files","The character set of the input files","Show diagnostic information.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.","Do not include the default library file (lib.d.ts).","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Enables experimental support for ES7 decorators.","If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","List files and folders that should not be included. This property is not honored when the 'files' property is present."],"vs/editor/common/config/commonEditorConfig":["エディターの構成","フォント ファミリを制御します。","フォント サイズを制御します。","行の高さを制御します。","行番号の表示を制御します","グリフ余白の表示を制御します","垂直ルーラーを表示する列","単語に関連したナビゲーションまたは操作を実行するときに、単語の区切り文字として使用される文字","タブ 1 つに相当するスペースの数。","'number' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。","Tab キーを押すとスペースが挿入されます。","'boolean' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。","ファイルを開くと、そのファイルの内容に基づいて `editor.tabSize` と `editor.insertSpaces` が検出されます。","選択範囲の角を丸くするかどうかを制御します","エディターで最後の行を越えてスクロールするかどうかを制御します","エディターで次の行に折り返される文字数を制御します。これを 0 に設定すると、ビューポートの幅での折り返しがオンになります (ワード ラップ)。これを -1 に設定するとエディターによる折り返しが禁止されます。","折り返し行のインデントを制御します。'none'、'same'、または 'indent' のいずれかを指定できます。","マウス ホイール スクロール イベントの `deltaX` と `deltaY` で使用される乗数","入力中にクイック候補を表示するかどうかを制御します","クイック候補が表示されるまでの待ち時間 (ミリ秒) を制御します","Enables parameter hints","エディターで左角かっこの後に自動的に右角かっこを挿入するかどうかを制御します","エディターで入力後に自動的に行の書式設定を行うかどうかを制御します","トリガー文字の入力時に候補が自動的に表示されるようにするかどうかを制御します","'Tab' キーに加えて 'Enter' キーで候補を受け入れるかどうかを制御します。改行の挿入や候補の反映の間であいまいさを解消するのに役立ちます。","エディターで選択範囲に類似する一致箇所を強調表示するかどうかを制御します","概要ルーラーの同じ位置に表示できる装飾の数を制御します","カーソルのアニメーションの点滅を制御します。指定できる値は 'blink'、'visible'、'hidden' です","カーソルのスタイルを制御します。指定できる値は 'block' と 'line' です","フォントの合字を使用します","概要ルーラーでカーソルを非表示にするかどうかを制御します。","エディターで空白文字を表示するかどうかを制御します","サポートしているモードについての参照情報をエディターで表示するかどうかを制御します","エディターでコードの折りたたみを有効にするかどうかを制御します","空白の挿入や削除はタブ位置に従って行われます","自動挿入された末尾の空白を削除する","Keep peek editors open even when double clicking their content or when hitting Escape.","差分エディターが差分を横に並べて表示するか、行内に表示するかを制御します","差分エディターが、先頭または末尾の空白の変更を差分として表示するかどうかを制御します。","Linux の PRIMARY クリップボードをサポートするかどうかを制御します。"],"vs/editor/common/config/defaultConfig":["エディターのコンテンツ"],"vs/editor/common/controller/cursor":["コマンドの実行中に予期しない例外が発生しました。"],"vs/editor/common/model/textModelWithTokens":["入力のトークン化中にモードが失敗しました。"],"vs/editor/common/modes/modesRegistry":["プレーンテキスト"],"vs/editor/common/modes/supports/suggestSupport":["ワード ベースの修正候補を有効にします。"],"vs/editor/common/services/bulkEdit":["この間に次のファイルが変更されました: {0}"],"vs/editor/common/services/modeServiceImpl":["言語の宣言を提供します。","言語の ID。","言語の名前のエイリアス。","言語に関連付けられているファイルの拡張子。","言語に関連付けられたファイル名。","言語に関連付けられたファイル名の glob パターン。","言語に関連付けられている MIME の種類。","言語のファイルの最初の行に一致する正規表現。","言語の構成オプションを含むファイルへの相対パス。","`contributes.{0}` に対する空の値","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` を省略するか、型 `string[]` にする必要があります","プロパティ `{0}` を省略するか、型 `string[]` にする必要があります","プロパティ `{0}` を省略するか、型 `string` にする必要があります","プロパティ `{0}` を省略するか、型 `string` にする必要があります","プロパティ `{0}` を省略するか、型 `string[]` にする必要があります","プロパティ `{0}` を省略するか、型 `string[]` にする必要があります","正しくない `contributes.{0}`。配列が必要です。"],"vs/editor/common/services/modelServiceImpl":['設定を更新してください: `editor.detectIndentation` は `editor.tabSize`: "auto" または `editor.insertSpaces`: "auto" を置き換えます'],"vs/editor/contrib/accessibility/browser/accessibility":["アクセシビリティのヘルプを表示します","VS Code の実験用アクセシビリティ オプションをご利用いただき、ありがとうございます。","ステータス:","このエディターで Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します。{0} を押すと、この動作が切り替わります。","このエディターで Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します。コマンド {0} は、キー バインドでは現在トリガーできません。","このエディターで Tab キーを押すと、タブ文字が挿入されます。{0} を押すと、この動作が切り替わります。","このエディターで Tab キーを押すと、次のフォーカス可能な要素にフォーカスを移動します。コマンド {0} は、キー バインドでは現在トリガーできません。","Esc キーを押すと、ヒントを消してエディターに戻ることができます。"],"vs/editor/contrib/carretOperations/common/carretOperations":["Move Carret Left","Move Carret Right"],"vs/editor/contrib/clipboard/browser/clipboard":["切り取り","コピー","貼り付け"],"vs/editor/contrib/comment/common/comment":["行コメントの切り替え","行コメントの追加","行コメントの削除","ブロック コメントの切り替え"],"vs/editor/contrib/contextmenu/browser/contextmenu":["エディターのコンテキスト メニューの表示"],"vs/editor/contrib/defineKeybinding/browser/defineKeybinding":["キー バインドの定義","任意のキーの組み合わせを押し、ENTER キーを押します","キー バインドの定義","現在のキーボード レイアウト用に","現在のキーボード レイアウトでは、このキーの組み合わせを生成することはできません。"],"vs/editor/contrib/find/browser/findWidget":["検索","検索","前の一致項目","次の一致項目","選択範囲を検索","閉じる","置換","置換","置換","すべて置換","置換モードの切り替え","最初の 999 の結果だけを強調表示しますが、テキスト全体を検索します。","{1} の {0}","結果がありません"],"vs/editor/contrib/find/common/findController":["一致項目のすべての出現個所を選択","すべての出現箇所を変更","検索","次を検索","前を検索","次の選択項目を検索","前の選択項目を検索","置換","最後に選択した項目を次の一致項目に移動","選択した項目を次の一致項目に追加"],"vs/editor/contrib/folding/browser/folding":["展開","Unfold Recursively","折りたたみ","Fold Recursively","すべて折りたたみ","すべて展開","折りたたみレベル 1","折りたたみレベル 2","折りたたみレベル 3","折りたたみレベル 4","折りたたみレベル 5"],"vs/editor/contrib/format/common/formatActions":["コードの書式設定"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" - {0} の定義","クリックして、見つかった {0} の定義を表示します。","ピークの定義","定義へ移動","定義を横に開く"],"vs/editor/contrib/gotoError/browser/gotoError":["修正候補: ","修正候補: ","({0}/{1}) [{2}]","({0}/{1})","次のエラーまたは警告へ移動","前のエラーまたは警告へ移動"],"vs/editor/contrib/hover/browser/hover":["ホバーの表示"],"vs/editor/contrib/hover/browser/modesContentHover":["読み込んでいます..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["前の値に置換","次の値に置換"],"vs/editor/contrib/indentation/common/indentation":["構成されたタブのサイズ","現在のファイルのタブのサイズを選択","インデントをスペースに変換","インデントをタブに変換","スペースによるインデント","タブによるインデント","内容からインデントを検出","空白文字の表示の切り替え"],"vs/editor/contrib/linesOperations/common/linesOperations":["行の削除","行を昇順に並べ替え","行を降順に並べ替え","末尾の空白のトリミング","行を下へ移動","行を上へ移動","行を下へコピー","行を上へコピー","行のインデント","行のインデント解除","行を上に挿入","行を下に挿入"],"vs/editor/contrib/links/browser/links":["command キーを押しながらクリックしてリンク先を表示","Ctrl キーを押しながらクリックしてリンク先を表示","正しくない URI: {0} を開くことができません","リンクを開く"],"vs/editor/contrib/multicursor/common/multicursor":["カーソルを上に挿入","カーソルを下に挿入","選択した行から複数のカーソルを作成"],"vs/editor/contrib/parameterHints/browser/parameterHints":["パラメーター ヒントをトリガー"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}、ヒント"],"vs/editor/contrib/quickFix/browser/quickFix":["クイック修正"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}、クイック修正候補","読み込んでいます...","修正候補はありません。","クイック修正","{0}、受け入れ済み"],"vs/editor/contrib/quickOpen/browser/gotoLine":["行 {0} 列 {1} へ移動","行 {0} へ移動","移動先の行番号を 1 ～ {0} の範囲で入力してください","移動先の列を 1 ～ {0} の範囲で入力してください","Go to line {0}","指定行へ移動...","オプションのコロンと列番号の前に移動先の行番号を入力してください"],"vs/editor/contrib/quickOpen/browser/gotoLine.contribution":["指定行へ移動..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","コマンド パレット","実行する操作の名前を入力してください"],"vs/editor/contrib/quickOpen/browser/quickCommand.contribution":["コマンド パレット"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","シンボルへ移動...","移動先の識別子の名前を入力してください","シンボル ({0})","モジュール ({0})","クラス ({0})","インターフェイス ({0})","メソッド ({0})","関数 ({0})","プロパティ ({0})","変数 ({0})","変数 ({0})","コンストラクター ({0})","呼び出し ({0})"],"vs/editor/contrib/quickOpen/browser/quickOutline.contribution":["シンボルへ移動..."],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" - {0} の参照","すべての参照の検索","参照の表示"],"vs/editor/contrib/referenceSearch/browser/referencesController":["読み込んでいます..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Failed to resolve file.","{0} 個の参照","{0} 個の参照","プレビューを表示できません","参照","結果がありません","参照"],"vs/editor/contrib/rename/browser/rename":["シンボルの名前を変更"],"vs/editor/contrib/rename/browser/renameInputField":["名前変更入力。新しい名前を入力し、Enter キーを押してコミットしてください。"],"vs/editor/contrib/rename/common/rename":["結果がありません。"],"vs/editor/contrib/smartSelect/common/jumpToBracket":["ブラケットへ移動"],"vs/editor/contrib/smartSelect/common/smartSelect":["選択範囲を拡大","選択範囲を縮小"],"vs/editor/contrib/suggest/browser/suggest":["候補をトリガー"],"vs/editor/contrib/suggest/browser/suggestWidget":["詳細を表示...{0}","{0}、候補、詳細あり","{0}、候補","戻る","読み込んでいます...","候補はありません。","{0}、受け入れ済み","{0}、候補、詳細あり","{0}、候補"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["フォーカスを設定するために Tab キーの使用を切り替える"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["表示: [右端で折り返す] の設定/解除"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["閉じる"],"vs/languages/html/common/html.contribution":["HTML 構成","1 行あたりの最大文字数 (0 = 無効にする)。","再フォーマットしてはならないタグを、コンマで区切ってリストにします。'null' は、既定値の \"すべてのインライン タグ\" を表します。","<head> セクションと <body> セクションをインデントします。","要素の前にある既存の改行を保持するかどうか。要素の前でのみ機能し、タグの内側やテキストに対しては機能しません。","1 つのチャンク内に保持できる改行の最大数。無制限にするには、'null' を使います。","書式設定とインデント {{#foo}} および {{/foo}}。","末尾に改行を入れます。","直前に改行を 1 つ入れるタグの、コンマで区切られたリストです。'null' は、既定値の \"head, body, /html\" を表します。"],"vs/platform/actions/browser/menuItemActionItem":["{0} ({1})"],"vs/platform/configuration/common/configurationRegistry":["構成の設定を提供します。","設定の概要です。このラベルは、設定ファイルでコメントの区切り文字として使用します。","構成のプロパティの説明です。","設定すると、'configuration.type' は 'オブジェクトに設定されなければなりません","'configuration.title' は、文字列である必要があります","'configuration.properties' は、オブジェクトである必要があります"],"vs/platform/extensions/common/abstractExtensionService":["拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` が不明です。","拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` のアクティブ化に失敗しました。","拡張機能 `{0}` のアクティブ化に失敗しました。理由: 依存関係のレベルが 10 を超えています (依存関係のループの可能性があります)。","拡張機能 `{0}` のアクティブ化に失敗しました: {1}。"],"vs/platform/extensions/common/extensionsRegistry":["空の拡張機能の説明を入手しました","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は必須で、型 `object` でなければなりません","プロパティ `{0}` は必須で、型 `string` でなければなりません","プロパティ `{0}` は省略するか、型 `string[]` にする必要があります","プロパティ `{0}` は省略するか、型 `string[]` にする必要があります","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","プロパティ `{0}` は省略するか、型 `string` にする必要があります","拡張機能のフォルダー ({1}) の中に `main` ({0}) が含まれることが予期されます。これにより拡張機能を移植できなくなる可能性があります。","プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません","VS Code ギャラリーで使用される拡張機能の表示名。","VS Code ギャラリーで拡張機能の分類に使用されるカテゴリ。","VS Code マーケットプレースで使用されるバナー。","VS Code マーケットプレース ページ ヘッダー上のバナーの色。","バナーで使用されるフォントの配色テーマ。","VS Code 拡張機能の公開元。","VS Code 拡張機能のアクティブ化イベント。","他の拡張機能に対する依存関係。拡張機能の識別子は常に ${publisher}.${name} です。例: vscode.csharp。","パッケージが VS Code 拡張機能として公開される前に実行されるスクリプト。","このパッケージで表される VS Code 拡張機能のすべてのコントリビューション。"],"vs/platform/jsonschemas/common/jsonContributionRegistry":["スキーマを使用して JSON ファイルを記述します。詳細については、json-schema.org を参照してください。","スキーマの一意識別子。","このドキュメントを検証するためのスキーマ ","要素のわかりやすいタイトル","要素の詳しい説明。ホバー メニューや候補に使用されます。","既定値。候補に使用されます。","現在の値を割り切れる数値 (つまり、余りなし)","最大数値、既定でその値を含む。","maximum プロパティを排他的にします。","最小数値、既定でその値を含む。","minimum プロパティを排他的にします。","文字列の最大長。","文字列の最小長。","文字列を照合する正規表現。これは暗黙的に固定されていません。","配列に対応 (項目が配列として設定されている場合のみ)。スキーマの場合、このスキーマによって、項目の配列によって指定された項目の後にある項目が検証されます。false の場合、追加の項目により、検証が失敗します。","配列に対応。各要素の検証基準となるスキーマ、または各項目を順番 (最初のスキーマで最初の要素、2 番目のスキーマで 2 番目の要素を検証するなど) に検証する際に基準となるスキーマの配列になります。","配列内に含めることのできる項目の最大数。その数を含む。","配列内に含めることのできる項目の最小数。その数を含む。","配列内のすべての項目が一意である必要があるかどうか。既定値は false です。","オブジェクトに含めることのできるプロパティの最大数。その数を含む。","オブジェクトに含めることのできるプロパティの最小数。その数を含む。","このオブジェクトで必要なすべてのプロパティの名前をリストする文字列の配列。","スキーマまたはブール値。スキーマの場合は、'properties' とも 'patternProperties' とも一致しないすべてのプロパティを検証するために使用されます。false の場合は、どちらとも一致しないプロパティがあれば、このスキーマは失敗します。","検証に使用されません。$ref を使用してインラインで参照するサブスキーマをここに配置してください","プロパティ名から各プロパティのスキーマへのマップ。","プロパティ名の正規表現から一致するプロパティのスキーマへのマップ。","プロパティ名からプロパティ名の配列またはスキーマへのマップ。プロパティ名の配列は、キーで名前が付けられているプロパティが、有効にするためにオブジェクトに含まれている配列のプロパティによって決まることを意味します。値がスキーマの場合は、キーのプロパティがオブジェクトに存在する場合のみ、スキーマがオブジェクトに適用されます。","有効なリテラル値のセット","基本的なスキーマ型のいずれかの文字列 (number、integer、null、array、object、boolean、string) またはこれらの型のサブセットを指定する文字列の配列。","値に求められる形式を説明します。","スキーマの配列 (スキーマはすべて一致する必要があります)。","スキーマの配列 (この場合、少なくとも 1 つが一致する必要があります)。","スキーマの配列 (スキーマのうち 1 つは完全一致する必要があります)。","一致してはならないスキーマ。"],"vs/platform/keybinding/browser/keybindingServiceImpl":["他に使用できるコマンドは次のとおりです: ","({0}) が押されました。2 番目のキーを待っています...","キーの組み合わせ ({0}、{1}) はコマンドではありません。"],"vs/platform/message/common/message":["閉じる","キャンセル"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ja.js.map