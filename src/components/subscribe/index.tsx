import React, {useState} from 'react';

interface modalProp {
    title: string,
    content: string,
    visible: boolean,
    close: Function
}

export function Modal(prop:modalProp) {
  const {title, content, visible, close } = prop
  return( visible ? 
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" x-data="{ open: bool }">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-title">{title}</h3>
                    <div className="mt-2">
                        <div className='flex justify-between'>
                            <div >
                                <img src="/img/year.png" width="200" alt="catchadmin 年付订阅" className='rounded-xl'/>
                                <div className="inline-block w-full bg-gradient-to-r from-[#F8CC6B] to-purple-300 bg-clip-text text-transparent uppercase text-center font-bold text-lg">年订阅</div>
                            </div>
                            <div>
                                <img src="/img/forever.png" width="200" alt="Catchadmin 永久订阅" className='rounded-xl'/>
                                <div className="inline-block w-full text-center bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent uppercase font-bold text-lg">
                                    永久订阅
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5'><span className='text text-gray-500'>请扫码进行购买！购买前请认真阅读</span><span onClick={() => close() } className='text-lg font-bold'><a href='/docs/3.0/pro/price#使用说明'>使用说明</a></span></div>
                </div>
            </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <div onClick={() => close() } className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer">确定</div>
            <div onClick={() => close() } className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer">取消</div>
            </div>
        </div>
        </div>
    </div>
    </div> :  null
  )
}

export function Year() {
    const [modalVisible, setModalVisible] = useState(false);
    const modalConfig = {
        title: '订阅',
        content: '',
        visible: modalVisible,
        close: () => {
            setModalVisible(false);
        }
    };
    return (
        <div className="w-96 h-[30rem] bg-gray-50 dark:bg-gray-900 rounded-3xl pl-10 pr-10 pt-5 pb-5 hover:shadow">
        <h3 className="inline-block w-full bg-gradient-to-r from-[#F8CC6B] to-purple-300 bg-clip-text text-transparent font-bold text-2xl uppercase mt-6 text-center">🌟 年订阅</h3>
        <p className="w-full text-center">
            <span className="text-gray-600 dark:text-white font-bold text-5xl">¥699</span>
        </p>
        <ul className="space-y-6 mt-6">
            <li className="flex items-center gap-10">
                <span className="text-gray-600 dark:text-gray-400">✔️ 不限制项目使用</span>
            </li>
            <li className="flex items-center gap-10">
                <span className="text-gray-600 dark:text-gray-400">💖 <a href='https://bbs.catchadmin.com/?tab=pro' target='_blank'>论坛技术支持</a></span>
            </li>
            <li className="flex items-center gap-10">
                <span className="text-gray-600 dark:text-gray-400">©️ CatchAdminPro 所有功能</span>
            </li>
            <li className="flex items-center gap-10">
                <span className="text-gray-600 dark:text-gray-400">✊ 购买日起一年内可更新</span>
            </li>
        </ul>
        <div className="mt-12 relative block w-full h-12 bg-gradient-to-br from-[#F8CC6B] to-purple-300 border-2 border-transparent dark:border-solid dark:border-gray-500 rounded-lg text-gray-900 font-semibold transition hover:opacity-80 cursor-pointer">
        <span onClick={() => setModalVisible(true)} className="inset-0 absolute flex items-center justify-center rounded-lg bg-gray-900 text-white font-semibold text-center cursor-pointer">🚀 点 击 购 买</span>
        </div>
        <Modal {...modalConfig}/>
        </div>
    )
};
  
  export function Forever() {
    const [modalVisible, setModalVisible] = useState(false);
    const modalConfig = {
        title: '订阅',
        content: '',
        visible: modalVisible,
        close: () => {
            setModalVisible(false);
        }
    };
    return (
     <div className="w-96 h-[30rem] bg-gray-50 dark:bg-gray-900 rounded-3xl p-5 hover:shadow pl-10 pr-10 pt-5 pb-5">
      <h3 className="inline-block w-full text-center bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent font-bold text-2xl uppercase mt-6">
          👑 永久订阅
      </h3>
      <p className="w-full text-center">
          <span className="text-gray-600 dark:text-white font-bold text-5xl">¥1399</span>
      </p>
      <ul className="space-y-6 mt-6">
        <li className="flex items-center gap-10">
            <span className="text-gray-600 dark:text-gray-400">✔️ 不限制项目使用</span>
        </li>
        <li className="flex items-center gap-10">
            <span className="text-gray-600 dark:text-gray-400">💖 <a href='https://bbs.catchadmin.com/?tab=pro' target='_blank'>论坛技术支持</a> / QQ 技术支持</span>
        </li>
        <li className="flex items-center gap-10">
            <span className="text-gray-600 dark:text-gray-400">©️ CatchAdminPro 所有功能</span>
        </li>
        <li className="flex items-center gap-10">
            <span className="text-gray-600 dark:text-gray-400">💪 购买日起永久更新所有功能</span>
        </li>
      </ul>
      <div className="mt-12 relative block w-full h-12 bg-gradient-to-br from-[#F8CC6B] to-purple-300 border-2 border-transparent dark:border-solid dark:border-gray-500 rounded-lg text-gray-900 font-semibold transition hover:opacity-80 cursor-pointer">
      <span onClick={() => setModalVisible(true)} className="inset-0 absolute flex items-center justify-center rounded-lg bg-gray-900 text-white font-semibold text-center">🚀 点 击 购 买</span>
      </div>
      <Modal {...modalConfig}/>
    </div>
    )
  };

  export function Subscribe() {
    return (
      <div className="flex flex-col sm:flex-row gap-5 mx-auto w-full ml-0 sm:ml-24">
        <Year/><Forever/>
      </div>
    )
  }