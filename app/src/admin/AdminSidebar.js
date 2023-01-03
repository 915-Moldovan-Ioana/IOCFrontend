import * as RiIcons from 'react-icons/ri';

const AdminSidebar = [
    {
        title: 'Coordonare lucrare',
        path: '/admin/bachelor',
        className: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Posteaza informatii',
                path: '/admin/bachelor/post'
            },
            {
                title: 'Situatie studenti',
                path: '/admin/bachelor/student_situation'
            },
            {
                title: 'Situatie coordonatori',
                path: '/admin/bachelor/coordinator_situation'
            },
            {
                title: 'Chat',
                path: '/admin/bachelor/chat'
            },
            {
                title: 'Trimitere email',
                path: '/admin/bachelor/email'
            },
            {
                title: 'Acorduri de licenta',
                path: '/admin/bachelor/acc_bachelor'
            },
            {
                title: 'Acorduri de studenti',
                path: '/admin/bachelor/acc_students'
            }
        ]
    },
    {
        title: 'Stagiu practic',
        path: '/admin/internship',
        className: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Posteaza informatii',
                path: '/admin/internship/post'
            },
            {
                title: 'Situatie studenti',
                path: '/admin/internship/situation'
            },
            {
                title: 'Editeaza criterii practica',
                path: '/admin/internship/edit'
            },
            {
                title: 'Vizualizare note',
                path: '/admin/internship/grades'
            },
            {
                title: 'Gestionare conturi',
                path: '/admin/internship/accounts'
            }
        ]
    }
]

export default AdminSidebar;