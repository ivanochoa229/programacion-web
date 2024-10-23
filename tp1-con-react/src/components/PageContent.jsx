import { array, object, string } from "prop-types"
import './pageContent.css'
export const PageContent = ({children, headerTitle = '', actions=[]}) => {
    return (
        <div className='page-content'>
          <header className='page-content__header'>
            <div>
              { headerTitle }
            </div>
            <div className='page-content__header_actions'>
              { [ ...actions ] }
            </div>
          </header>
          <main className='page-content__main'>
            { children }
          </main>
        </div>
      );
}

PageContent.propTypes = {
    children: object,
    headerTitle: string.isRequired,
    actions: array
}