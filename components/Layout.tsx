import s from "@styles/components/Layout.module.sass"

const LayoutContainer: React.FC = ({ children }) => (
  <div className={s.container}>{children}</div>
)

const LayoutHeader: React.FC = ({ children }) => (
  <header className={s.header}>{children}</header>
)

const LayoutMain: React.FC = ({ children }) => (
  <main className={s.content}>{children}</main>
)

const LayoutFooter: React.FC = ({ children }) => (
  <footer className={s.footer}>{children}</footer>
)

const Layout = {
  Container: LayoutContainer,
  Header: LayoutHeader,
  Main: LayoutMain,
  Footer: LayoutFooter,
}

export default Layout
