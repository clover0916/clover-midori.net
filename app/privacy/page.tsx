import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 sm:p-8">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
                <p className="mb-4">
                    当サービス（以下、「当サービス」または「当ウェブサイト」と称します）は、Clover_Midori（以下、「運営者」と称します）によって運営されており、ユーザーのプライバシーを尊重することを約束いたします。本プライバシーポリシーは、当サービスの利用に関連する個人情報の収集、使用、共有について説明します。当サービスをご利用いただく前に、本ポリシーをよくお読みください。
                </p>
                <h2 className="text-xl font-bold mb-2">1. 収集する情報</h2>
                <p className="mb-4">
                    当サービスでは、以下の目的でユーザーの個人情報を収集する場合があります：
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>サービス提供のため：当サービスの提供や運営に必要な情報を収集します。</li>
                    <li>お問い合わせへの対応：ユーザーからのお問い合わせに対応するために必要な情報を収集します。</li>
                    <li>利用状況の分析：当サービスの利用状況を把握し、サービスの改善に役立てるために情報を収集します。</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">2. 収集する情報の種類</h2>
                <p className="mb-4">
                    当サービスが収集する可能性のある情報には、以下が含まれますが、これらに限定されるものではありません：
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>個人情報：氏名、メールアドレス、連絡先など、特定の個人を識別できる情報。</li>
                    <li>ログ情報：IPアドレス、ブラウザの種類、ページの閲覧時間など、サービス利用に関連する情報。</li>
                    <li>クッキー：当サービスはクッキーを使用する場合があります。クッキーは、ユーザーが当サービスを再訪問した際に、ユーザーを識別するために使用される情報です。</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">3. 情報の利用</h2>
                <p className="mb-4">
                    運営者は、収集した情報を以下の目的のために利用します：
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>サービス提供：当サービスの提供や運営に必要な情報を利用します。</li>
                    <li>お問い合わせへの対応：ユーザーからのお問い合わせに対応するために情報を利用します。</li>
                    <li>サービス改善：収集した情報をもとに、当サービスの改善に活用します。</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">4. 情報の共有</h2>
                <p className="mb-4">
                    運営者は、ユーザーの個人情報を以下の場合を除いて、第三者と共有しません：
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>ユーザーの同意がある場合。</li>
                    <li>法的な要請に基づき、情報提供が必要な場合。</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">5. データの保管</h2>
                <p className="mb-4">
                    運営者は、収集した情報を適切に管理し、ユーザーの個人情報を適切に保護します。
                </p>
                <h2 className="text-xl font-bold mb-2">6. プライバシーポリシーの変更</h2>
                <p className="mb-4">
                    運営者は、必要に応じて本プライバシーポリシーを変更することがあります。変更が行われた場合は、当ウェブサイト上で公開します。
                </p>
                <h2 className="text-xl font-bold mb-2">7. お問い合わせ</h2>
                <p className="mb-4">
                    プライバシーポリシーに関するお問い合わせは、以下の連絡先までご連絡ください：
                </p>
                <p>連絡先：</p>
                <p>Twittter: @Clover_0916</p>
                <p>Discord: clover0916</p>
                <p className="mt-4">
                    以上が、Clover_Midoriが運営するサービスのプライバシーポリシーです。ご利用に際しては、本ポリシーに同意されたものとみなします。
                </p>
            </div>
        </main>
    )
}
