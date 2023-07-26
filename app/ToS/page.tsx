import { Metadata } from "next";
export const metadata: Metadata = {
  title: "利用規約",
};

export default function ToS() {
  return (
    <main className="main-container">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">利用規約</h1>
        <p>最終更新日: 2023/7/24</p>
        <p className="mb-4">
          当サービス（以下、「当サービス」または「当ウェブサイト」と称します）は、Clover_Midori（以下、「運営者」と称します）によって運営されており、ユーザーの利用を規定するために、以下の利用規約（以下、「本規約」といいます）を定めています。本規約は、本サービスの利用に関連する一切の事項に適用されるものとします。当サービスをご利用いただく前に、本規約をよくお読みください。
        </p>
        <h2 className="text-xl font-bold mb-2">1. サービスの提供</h2>
        <p className="mb-4">
          当運営者は、本サービスを提供するものとし、ユーザーは本サービスを利用することができます。ただし、本規約に違反する行為や法律に反する行為は禁止されています。
        </p>
        <h2 className="text-xl font-bold mb-2">2. 禁止事項</h2>
        <p className="mb-4">ユーザーは、以下のような行為を禁止します：</p>
        <ul className="list-disc list-inside mb-4">
          <li>法律や公序良俗に違反する行為</li>
          <li>他のユーザーの権利を侵害する行為</li>
          <li>不正アクセスやシステムへの攻撃を試みる行為</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>その他、当運営者が不適切と判断する行為</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">3. 免責事項</h2>
        <p className="mb-4">
          当運営者は、本サービスの利用により生じるいかなる損害に対しても責任を負いません。本サービスの利用に関連して生じたトラブルや紛争についても、当運営者は一切の責任を負いません。
        </p>
        <h2 className="text-xl font-bold mb-2">4. プライバシーポリシー</h2>
        <p className="mb-4">
          本サービスの利用に際しては、運営者のプライバシーポリシーも適用されます。プライバシーポリシーに関しては、当サービス上で確認してください。
        </p>
        <h2 className="text-xl font-bold mb-2">5. 著作権と知的財産権</h2>
        <p className="mb-4">
          当サービス上で提供されるコンテンツや情報に関する著作権や知的財産権は、運営者または情報提供者に帰属します。ユーザーは、運営者または情報提供者の許可なく、コンテンツや情報を無断で使用・複製・再配布することはできません。
        </p>
        <h2 className="text-xl font-bold mb-2">6. その他</h2>
        <p className="mb-4">
          本規約は、日本法を準拠法とし、日本国内での利用に適用されます。本規約の一部が無効と判決された場合でも、残りの規定は有効とします。
        </p>
        <h2 className="text-xl font-bold mb-2">7. お問い合わせ</h2>
        <p className="mb-4">
          利用規約に関するお問い合わせは、以下の連絡先までご連絡ください：
        </p>
        <p>連絡先：</p>
        <p>Twittter: @Clover_0916</p>
        <p>Discord: clover0916</p>
        <p className="mt-4">
          以上が、Clover_Midoriが運営するサービスの利用規約です。ご利用に際しては、本規約に同意されたものとみなします。
        </p>
      </div>
    </main>
  );
}
