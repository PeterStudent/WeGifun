module.exports = {
    title: 'WeGifun',

    edu: 'Education Management System',
    card: 'Campus Card',
    electric: 'Dorm Electricity',
    service: 'Services',
    catalog: 'Catalog Retrieval',

    btn_title: 'Confirm',
    loading: 'Loading',
    request_failed: 'Request failed, maybe there\'s something wrong with the network.',
    service_unavailable: 'Service Unavailable, please try again later.',
    unknown_error: 'Unknown error, if it\'s convenient, please feedback, thanks.',
    wx_version_warn: 'WeChat version is too low, some features are limited.',

    modal_title: 'Uh',
    modal_confirm: 'OK',
    modal_cancel: 'No',

    intro: 'Welcome to use, whether to read the guide?',
    intro_title: 'Intro',
    intro_blockquote: 'This is a brief introduction, and reading it can make you more quickly learn more about WeGifun.',
    intro_noun: 'Noun explanation',
    intro_noun_service: 'Service',
    intro_noun_service_content: ['A system is a service. Click on "Me" on the home page of WeGifun and then click on your avatar to see the current status of the services. You can bind and update the services there.', 'Currently supported: Education Management System, Campus Card System.'],
    intro_noun_account: 'Account',
    intro_noun_account_content: ['The user system between Education Management and Campus Card is different, their accounts are consistent, but the password is different. Therefore, use different services need to bind different user systems.'],
    intro_guide: 'Use guide',
    intro_guide_content: ['Only bind a service, you can see the entrance to the service. The current services include the following features:', 'Education Management System: schedule.', 'Campus Card System: campus card, dorm electricity.', 'If you have questions or suggestions, you can find "Feedback" in "Setting".', 'If you want to leave the current account, you can find "Exit" in "Setting". This action will clear all the local cache data of WeGifun.'],

    index_schedule_detail_title: 'Detail',
    index_curr_week: 'No \n {0}',
    index_week_title: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    index_detail_week: 'Week {0}',
    index_detail_odd: 'Odd week',
    index_detail_even: 'Even week',

    home_default_nickname: 'Gifuner',
    home_stuid: 'StuID：{0}',
    home_stuid_null: 'Not logged in',
    home_setting: 'Setting',

    login_title_edu: 'Education Management System - Login',
    login_title_card: 'Campus Card - Login',
    login_id: 'Stu ID',
    login_pwd: 'Password',
    login_tip_edit: 'If the password has changed, you can enter the new password to update the binding.',
    login_tip_edu: 'Password format: 6-16 characters.',
    login_tip_card: 'Password format: 6 digits.',

    score: 'Course Score',
    score_grade: ['1st', '2nd', '3rd', '4th', '5th'],
    score_null: 'no record',
    score_schooltime: ['Year', 'Semester'],
    score_semester: ['Autumn', 'Spring'],
    score_table_title: ['Name', 'Credit', 'GPA', 'Score'],

    card_balance: 'My Balance',
    card_record: 'Records',
    card_witticism: 'Money is not everything. There\'s Alipay and Tenpay.',

    record_start_date: 'Start Date',
    record_end_date: 'End Date',
    record_tip: '{0} record(s), {1} CNY.',
    record_amount: 'Amount',
    record_area: 'Area',
    record_platform: 'Platform',
    record_time: 'Time',

    elec_recharge: 'Recharge',
    elec_record: 'Record',
    elec_remain: 'Remain',
    elec_remain_res: '{0} kW·h',
    elec_room_default: 'Default room',
    elec_room_other: 'Other room',
    elec_setting: 'Select Room',
    elec_recharge_check: 'Check',
    elec_recharge_check_tip: 'The Check Info comes from the Electricity Control Service. Do Not Recharge if it\'s not corresponding to the room you choose.',
    elec_recharge_confirm: 'Will recharge {1} yuan for {0}, sure?',
    elec_recharge_custom: 'Custom',
    elec_recharge_pwd_tip: 'Campus Card Password',
    elec_recharge_success: 'Success',
    elec_record_title: ['Dorm Consume', 'Dorm Recharge', 'User Recharge'],
    elec_record_dorm_consume_info: ['Remain / kW·h', 'Avg / kW·h', 'Expect / Days'],
    elec_record_dorm_consume_table_title: ['Date', 'kW·h', 'Yuan'],
    elec_record_dorm_recharge_title: 'Nearly two months of records',
    elec_record_dorm_recharge_null: 'There was no records for nearly two months',
    elec_record_dorm_recharge_table_title: ['Time', 'Amount'],
    elec_record_user_recharge_tip: 'If you make a mistake, try to contact each other!',
    elec_record_user_recharge_label: ['Amount', 'Room', 'Time'],
    elec_setting_building: 'Building',
    elec_setting_garden: ['Zhu', 'Gui', 'Mei', 'Rong', 'Kang'],
    elec_setting_room: 'Room',
    elec_setting_room_invalid: 'Invalid room.',
    elec_setting_history: 'History',
    elec_setting_exit: 'You must select a room or you will not be able to using this service.',

    catalog_result: '{0} results',
    catalog_amount: 'Total {0} / Available {1}',
    catalog_info: 'Catalog Info',
    catalog_info_meta: ['Title', 'Author', 'Publisher', 'ISBN', 'Call number', 'Location', 'Collection Info', 'Douban Book', 'Summary'],
    catalog_info_collection: ['Barcode', 'State'],
    catalog_info_collection_state: ['Borrowable', 'Waiting: {0}'],

    service_bind: 'Bind',
    service_unbind: 'Unbind',
    service_tip: 'Only allowed to bind services under the same StuID.',

    setting_edu_update_schedule: 'Update schedule',
    setting_edu_last_update: 'Last update: {0}',
    setting_authorization: 'Authorization',
    setting_feedback: 'Feedback',
    setting_about: 'About',
    setting_changelog: 'ChangeLog',
    setting_exit: 'Exit',
    setting_exit_content: 'It will clear all local cache when you exit, continue?',

    about_open_source: 'Open Source',
    about_copy_success: 'Has been copied',
    about_security: 'Security and Privacy',
    about_security_content: 'All the password of services you have bound are stored locally. Each time you use the service will carry the StuID and password, and then through the HTTPS encryption channel to interact with the server. Please ensure the safety of your network to prevent MITM.\nIn each request, the Server will store some information anonymously (not include password) for statistics and short-term cache.\nPlease DO NOT USE this program if you do not trust me.',
    about_gratitude: 'Gratitude',
    about_communication: 'Communication',
    about_communication_content: 'Welcome to join the QQ Group. Please indicate \'WeGifun\'.'
};