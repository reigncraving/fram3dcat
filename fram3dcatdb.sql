--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-01 13:56:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16516)
-- Name: GlobalModels_field_of_work; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_field_of_work" (
    id integer NOT NULL
);


ALTER TABLE public."GlobalModels_field_of_work" OWNER TO catadmin;

--
-- TOC entry 218 (class 1259 OID 16514)
-- Name: GlobalModels_field_of_work_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_field_of_work_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_field_of_work_id_seq" OWNER TO catadmin;

--
-- TOC entry 3272 (class 0 OID 0)
-- Dependencies: 218
-- Name: GlobalModels_field_of_work_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_field_of_work_id_seq" OWNED BY public."GlobalModels_field_of_work".id;


--
-- TOC entry 221 (class 1259 OID 16524)
-- Name: GlobalModels_frame; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_frame" (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    description character varying(100) NOT NULL,
    rating integer,
    number_of_comments integer,
    likes integer,
    views integer,
    "frameFile" character varying(100),
    frame_picture character varying(100),
    date_uploaded timestamp with time zone NOT NULL,
    last_moddified timestamp with time zone NOT NULL,
    author_id integer
);


ALTER TABLE public."GlobalModels_frame" OWNER TO catadmin;

--
-- TOC entry 223 (class 1259 OID 16532)
-- Name: GlobalModels_frame_comment; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_frame_comment" (
    id integer NOT NULL,
    content text NOT NULL,
    likes integer,
    pub_date timestamp with time zone NOT NULL,
    author_id integer,
    post_id integer
);


ALTER TABLE public."GlobalModels_frame_comment" OWNER TO catadmin;

--
-- TOC entry 222 (class 1259 OID 16530)
-- Name: GlobalModels_frame_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_frame_comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_frame_comment_id_seq" OWNER TO catadmin;

--
-- TOC entry 3273 (class 0 OID 0)
-- Dependencies: 222
-- Name: GlobalModels_frame_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_frame_comment_id_seq" OWNED BY public."GlobalModels_frame_comment".id;


--
-- TOC entry 220 (class 1259 OID 16522)
-- Name: GlobalModels_frame_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_frame_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_frame_id_seq" OWNER TO catadmin;

--
-- TOC entry 3274 (class 0 OID 0)
-- Dependencies: 220
-- Name: GlobalModels_frame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_frame_id_seq" OWNED BY public."GlobalModels_frame".id;


--
-- TOC entry 225 (class 1259 OID 16543)
-- Name: GlobalModels_location; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_location" (
    id integer NOT NULL,
    address_line1 character varying(100) NOT NULL,
    address_line2 character varying(100) NOT NULL,
    zip_code character varying(20) NOT NULL,
    state character varying(100) NOT NULL,
    country character varying(100) NOT NULL,
    long numeric(8,3),
    lat numeric(8,3)
);


ALTER TABLE public."GlobalModels_location" OWNER TO catadmin;

--
-- TOC entry 224 (class 1259 OID 16541)
-- Name: GlobalModels_location_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_location_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_location_id_seq" OWNER TO catadmin;

--
-- TOC entry 3275 (class 0 OID 0)
-- Dependencies: 224
-- Name: GlobalModels_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_location_id_seq" OWNED BY public."GlobalModels_location".id;


--
-- TOC entry 227 (class 1259 OID 16551)
-- Name: GlobalModels_skills; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_skills" (
    id integer NOT NULL
);


ALTER TABLE public."GlobalModels_skills" OWNER TO catadmin;

--
-- TOC entry 226 (class 1259 OID 16549)
-- Name: GlobalModels_skills_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_skills_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_skills_id_seq" OWNER TO catadmin;

--
-- TOC entry 3276 (class 0 OID 0)
-- Dependencies: 226
-- Name: GlobalModels_skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_skills_id_seq" OWNED BY public."GlobalModels_skills".id;


--
-- TOC entry 229 (class 1259 OID 16559)
-- Name: GlobalModels_tools; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."GlobalModels_tools" (
    id integer NOT NULL
);


ALTER TABLE public."GlobalModels_tools" OWNER TO catadmin;

--
-- TOC entry 228 (class 1259 OID 16557)
-- Name: GlobalModels_tools_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."GlobalModels_tools_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."GlobalModels_tools_id_seq" OWNER TO catadmin;

--
-- TOC entry 3277 (class 0 OID 0)
-- Dependencies: 228
-- Name: GlobalModels_tools_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."GlobalModels_tools_id_seq" OWNED BY public."GlobalModels_tools".id;


--
-- TOC entry 231 (class 1259 OID 16585)
-- Name: account_emailaddress; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.account_emailaddress (
    id integer NOT NULL,
    email character varying(254) NOT NULL,
    verified boolean NOT NULL,
    "primary" boolean NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.account_emailaddress OWNER TO catadmin;

--
-- TOC entry 230 (class 1259 OID 16583)
-- Name: account_emailaddress_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.account_emailaddress_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_emailaddress_id_seq OWNER TO catadmin;

--
-- TOC entry 3278 (class 0 OID 0)
-- Dependencies: 230
-- Name: account_emailaddress_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.account_emailaddress_id_seq OWNED BY public.account_emailaddress.id;


--
-- TOC entry 233 (class 1259 OID 16595)
-- Name: account_emailconfirmation; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.account_emailconfirmation (
    id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    sent timestamp with time zone,
    key character varying(64) NOT NULL,
    email_address_id integer NOT NULL
);


ALTER TABLE public.account_emailconfirmation OWNER TO catadmin;

--
-- TOC entry 232 (class 1259 OID 16593)
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.account_emailconfirmation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.account_emailconfirmation_id_seq OWNER TO catadmin;

--
-- TOC entry 3279 (class 0 OID 0)
-- Dependencies: 232
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.account_emailconfirmation_id_seq OWNED BY public.account_emailconfirmation.id;


--
-- TOC entry 213 (class 1259 OID 16458)
-- Name: accounts_user; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.accounts_user (
    id integer NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    last_logged_in date,
    avatar character varying(100),
    skills character varying(74) NOT NULL,
    work_fields character varying(196) NOT NULL,
    tools character varying(48) NOT NULL,
    company_name character varying(100) NOT NULL,
    "position" character varying(100) NOT NULL,
    website character varying(100) NOT NULL,
    address_line character varying(100) NOT NULL,
    zip_code character varying(20) NOT NULL,
    state character varying(100) NOT NULL,
    country character varying(100) NOT NULL,
    is_active boolean NOT NULL,
    is_available boolean NOT NULL,
    is_designer boolean NOT NULL,
    is_staff boolean NOT NULL,
    is_admin boolean NOT NULL
);


ALTER TABLE public.accounts_user OWNER TO catadmin;

--
-- TOC entry 215 (class 1259 OID 16470)
-- Name: accounts_user_groups; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.accounts_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.accounts_user_groups OWNER TO catadmin;

--
-- TOC entry 214 (class 1259 OID 16468)
-- Name: accounts_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.accounts_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_user_groups_id_seq OWNER TO catadmin;

--
-- TOC entry 3280 (class 0 OID 0)
-- Dependencies: 214
-- Name: accounts_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.accounts_user_groups_id_seq OWNED BY public.accounts_user_groups.id;


--
-- TOC entry 212 (class 1259 OID 16456)
-- Name: accounts_user_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.accounts_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_user_id_seq OWNER TO catadmin;

--
-- TOC entry 3281 (class 0 OID 0)
-- Dependencies: 212
-- Name: accounts_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.accounts_user_id_seq OWNED BY public.accounts_user.id;


--
-- TOC entry 217 (class 1259 OID 16478)
-- Name: accounts_user_user_permissions; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.accounts_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.accounts_user_user_permissions OWNER TO catadmin;

--
-- TOC entry 216 (class 1259 OID 16476)
-- Name: accounts_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.accounts_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_user_user_permissions_id_seq OWNER TO catadmin;

--
-- TOC entry 3282 (class 0 OID 0)
-- Dependencies: 216
-- Name: accounts_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.accounts_user_user_permissions_id_seq OWNED BY public.accounts_user_user_permissions.id;


--
-- TOC entry 209 (class 1259 OID 16414)
-- Name: auth_group; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO catadmin;

--
-- TOC entry 208 (class 1259 OID 16412)
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO catadmin;

--
-- TOC entry 3283 (class 0 OID 0)
-- Dependencies: 208
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- TOC entry 211 (class 1259 OID 16424)
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO catadmin;

--
-- TOC entry 210 (class 1259 OID 16422)
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO catadmin;

--
-- TOC entry 3284 (class 0 OID 0)
-- Dependencies: 210
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- TOC entry 207 (class 1259 OID 16406)
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO catadmin;

--
-- TOC entry 206 (class 1259 OID 16404)
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO catadmin;

--
-- TOC entry 3285 (class 0 OID 0)
-- Dependencies: 206
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- TOC entry 236 (class 1259 OID 16644)
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.authtoken_token OWNER TO catadmin;

--
-- TOC entry 240 (class 1259 OID 16675)
-- Name: blog_comment; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.blog_comment (
    id integer NOT NULL,
    content text NOT NULL,
    likes integer,
    pub_date timestamp with time zone NOT NULL,
    author_id integer,
    post_id integer
);


ALTER TABLE public.blog_comment OWNER TO catadmin;

--
-- TOC entry 239 (class 1259 OID 16673)
-- Name: blog_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.blog_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blog_comment_id_seq OWNER TO catadmin;

--
-- TOC entry 3286 (class 0 OID 0)
-- Dependencies: 239
-- Name: blog_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.blog_comment_id_seq OWNED BY public.blog_comment.id;


--
-- TOC entry 238 (class 1259 OID 16664)
-- Name: blog_story; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.blog_story (
    id integer NOT NULL,
    headline character varying(255) NOT NULL,
    body_text text NOT NULL,
    pub_date timestamp with time zone NOT NULL,
    mod_date timestamp with time zone NOT NULL,
    description character varying(255) NOT NULL,
    number_of_comments integer,
    rating integer,
    headline_photo character varying(100),
    author_id integer
);


ALTER TABLE public.blog_story OWNER TO catadmin;

--
-- TOC entry 237 (class 1259 OID 16662)
-- Name: blog_story_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.blog_story_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blog_story_id_seq OWNER TO catadmin;

--
-- TOC entry 3287 (class 0 OID 0)
-- Dependencies: 237
-- Name: blog_story_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.blog_story_id_seq OWNED BY public.blog_story.id;


--
-- TOC entry 235 (class 1259 OID 16622)
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO catadmin;

--
-- TOC entry 234 (class 1259 OID 16620)
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO catadmin;

--
-- TOC entry 3288 (class 0 OID 0)
-- Dependencies: 234
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- TOC entry 205 (class 1259 OID 16396)
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO catadmin;

--
-- TOC entry 204 (class 1259 OID 16394)
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO catadmin;

--
-- TOC entry 3289 (class 0 OID 0)
-- Dependencies: 204
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- TOC entry 203 (class 1259 OID 16388)
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO catadmin;

--
-- TOC entry 202 (class 1259 OID 16386)
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO catadmin;

--
-- TOC entry 3290 (class 0 OID 0)
-- Dependencies: 202
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- TOC entry 248 (class 1259 OID 16797)
-- Name: django_session; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO catadmin;

--
-- TOC entry 250 (class 1259 OID 16809)
-- Name: django_site; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.django_site (
    id integer NOT NULL,
    domain character varying(100) NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE public.django_site OWNER TO catadmin;

--
-- TOC entry 249 (class 1259 OID 16807)
-- Name: django_site_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public.django_site_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_site_id_seq OWNER TO catadmin;

--
-- TOC entry 3291 (class 0 OID 0)
-- Dependencies: 249
-- Name: django_site_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public.django_site_id_seq OWNED BY public.django_site.id;


--
-- TOC entry 242 (class 1259 OID 16704)
-- Name: jobBoard_job; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."jobBoard_job" (
    id integer NOT NULL,
    headline character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    skills character varying(74),
    "field_Of_Work" character varying(196),
    body_text text NOT NULL,
    salary integer,
    pub_date timestamp with time zone NOT NULL,
    mod_date timestamp with time zone NOT NULL,
    due_date timestamp with time zone NOT NULL,
    number_of_comments integer,
    rating integer,
    is_remote boolean NOT NULL,
    is_active boolean NOT NULL,
    submition_url character varying(255) NOT NULL,
    experience character varying(10) NOT NULL,
    author_id integer
);


ALTER TABLE public."jobBoard_job" OWNER TO catadmin;

--
-- TOC entry 246 (class 1259 OID 16723)
-- Name: jobBoard_job_comment; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."jobBoard_job_comment" (
    id integer NOT NULL,
    content text NOT NULL,
    likes integer,
    pub_date timestamp with time zone NOT NULL,
    author_id integer,
    post_id integer
);


ALTER TABLE public."jobBoard_job_comment" OWNER TO catadmin;

--
-- TOC entry 245 (class 1259 OID 16721)
-- Name: jobBoard_job_comment_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."jobBoard_job_comment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."jobBoard_job_comment_id_seq" OWNER TO catadmin;

--
-- TOC entry 3292 (class 0 OID 0)
-- Dependencies: 245
-- Name: jobBoard_job_comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."jobBoard_job_comment_id_seq" OWNED BY public."jobBoard_job_comment".id;


--
-- TOC entry 241 (class 1259 OID 16702)
-- Name: jobBoard_job_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."jobBoard_job_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."jobBoard_job_id_seq" OWNER TO catadmin;

--
-- TOC entry 3293 (class 0 OID 0)
-- Dependencies: 241
-- Name: jobBoard_job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."jobBoard_job_id_seq" OWNED BY public."jobBoard_job".id;


--
-- TOC entry 244 (class 1259 OID 16715)
-- Name: jobBoard_job_location; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public."jobBoard_job_location" (
    id integer NOT NULL,
    job_id integer NOT NULL,
    location_id integer NOT NULL
);


ALTER TABLE public."jobBoard_job_location" OWNER TO catadmin;

--
-- TOC entry 243 (class 1259 OID 16713)
-- Name: jobBoard_job_location_id_seq; Type: SEQUENCE; Schema: public; Owner: catadmin
--

CREATE SEQUENCE public."jobBoard_job_location_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."jobBoard_job_location_id_seq" OWNER TO catadmin;

--
-- TOC entry 3294 (class 0 OID 0)
-- Dependencies: 243
-- Name: jobBoard_job_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: catadmin
--

ALTER SEQUENCE public."jobBoard_job_location_id_seq" OWNED BY public."jobBoard_job_location".id;


--
-- TOC entry 247 (class 1259 OID 16776)
-- Name: knox_authtoken; Type: TABLE; Schema: public; Owner: catadmin
--

CREATE TABLE public.knox_authtoken (
    digest character varying(128) NOT NULL,
    salt character varying(16) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL,
    expiry timestamp with time zone,
    token_key character varying(8) NOT NULL
);


ALTER TABLE public.knox_authtoken OWNER TO catadmin;

--
-- TOC entry 2936 (class 2604 OID 16519)
-- Name: GlobalModels_field_of_work id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_field_of_work" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_field_of_work_id_seq"'::regclass);


--
-- TOC entry 2937 (class 2604 OID 16527)
-- Name: GlobalModels_frame id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_frame_id_seq"'::regclass);


--
-- TOC entry 2938 (class 2604 OID 16535)
-- Name: GlobalModels_frame_comment id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame_comment" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_frame_comment_id_seq"'::regclass);


--
-- TOC entry 2939 (class 2604 OID 16546)
-- Name: GlobalModels_location id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_location" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_location_id_seq"'::regclass);


--
-- TOC entry 2940 (class 2604 OID 16554)
-- Name: GlobalModels_skills id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_skills" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_skills_id_seq"'::regclass);


--
-- TOC entry 2941 (class 2604 OID 16562)
-- Name: GlobalModels_tools id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_tools" ALTER COLUMN id SET DEFAULT nextval('public."GlobalModels_tools_id_seq"'::regclass);


--
-- TOC entry 2942 (class 2604 OID 16588)
-- Name: account_emailaddress id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailaddress ALTER COLUMN id SET DEFAULT nextval('public.account_emailaddress_id_seq'::regclass);


--
-- TOC entry 2943 (class 2604 OID 16598)
-- Name: account_emailconfirmation id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailconfirmation ALTER COLUMN id SET DEFAULT nextval('public.account_emailconfirmation_id_seq'::regclass);


--
-- TOC entry 2933 (class 2604 OID 16461)
-- Name: accounts_user id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user ALTER COLUMN id SET DEFAULT nextval('public.accounts_user_id_seq'::regclass);


--
-- TOC entry 2934 (class 2604 OID 16473)
-- Name: accounts_user_groups id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_groups ALTER COLUMN id SET DEFAULT nextval('public.accounts_user_groups_id_seq'::regclass);


--
-- TOC entry 2935 (class 2604 OID 16481)
-- Name: accounts_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.accounts_user_user_permissions_id_seq'::regclass);


--
-- TOC entry 2931 (class 2604 OID 16417)
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- TOC entry 2932 (class 2604 OID 16427)
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- TOC entry 2930 (class 2604 OID 16409)
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- TOC entry 2947 (class 2604 OID 16678)
-- Name: blog_comment id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_comment ALTER COLUMN id SET DEFAULT nextval('public.blog_comment_id_seq'::regclass);


--
-- TOC entry 2946 (class 2604 OID 16667)
-- Name: blog_story id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_story ALTER COLUMN id SET DEFAULT nextval('public.blog_story_id_seq'::regclass);


--
-- TOC entry 2944 (class 2604 OID 16625)
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- TOC entry 2929 (class 2604 OID 16399)
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- TOC entry 2928 (class 2604 OID 16391)
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- TOC entry 2951 (class 2604 OID 16812)
-- Name: django_site id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_site ALTER COLUMN id SET DEFAULT nextval('public.django_site_id_seq'::regclass);


--
-- TOC entry 2948 (class 2604 OID 16707)
-- Name: jobBoard_job id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job" ALTER COLUMN id SET DEFAULT nextval('public."jobBoard_job_id_seq"'::regclass);


--
-- TOC entry 2950 (class 2604 OID 16726)
-- Name: jobBoard_job_comment id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_comment" ALTER COLUMN id SET DEFAULT nextval('public."jobBoard_job_comment_id_seq"'::regclass);


--
-- TOC entry 2949 (class 2604 OID 16718)
-- Name: jobBoard_job_location id; Type: DEFAULT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_location" ALTER COLUMN id SET DEFAULT nextval('public."jobBoard_job_location_id_seq"'::regclass);


--
-- TOC entry 3235 (class 0 OID 16516)
-- Dependencies: 219
-- Data for Name: GlobalModels_field_of_work; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_field_of_work" (id) FROM stdin;
\.


--
-- TOC entry 3237 (class 0 OID 16524)
-- Dependencies: 221
-- Data for Name: GlobalModels_frame; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_frame" (id, title, description, rating, number_of_comments, likes, views, "frameFile", frame_picture, date_uploaded, last_moddified, author_id) FROM stdin;
2	Lamp	my lamp	1	0	\N	\N	frames/2021/Lantern_3ljTzs2.glb	screenshot_MkvpEx2.jpg	2021-01-19 12:34:49.446759+00	2021-01-19 12:34:49.446777+00	28
3	MOnster	aaaa	\N	\N	\N	\N	frames/2021/Monster.glb	screenshot_TLqz2A4.gif	2021-01-19 14:01:18.944184+00	2021-01-19 14:01:18.944204+00	26
4	creative		\N	\N	\N	\N	frames/2021/BoxAnimated.glb	screenshot_QkJQlBr.gif	2021-01-19 16:58:15.606174+00	2021-01-19 16:58:15.606205+00	28
\.


--
-- TOC entry 3239 (class 0 OID 16532)
-- Dependencies: 223
-- Data for Name: GlobalModels_frame_comment; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_frame_comment" (id, content, likes, pub_date, author_id, post_id) FROM stdin;
\.


--
-- TOC entry 3241 (class 0 OID 16543)
-- Dependencies: 225
-- Data for Name: GlobalModels_location; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_location" (id, address_line1, address_line2, zip_code, state, country, long, lat) FROM stdin;
\.


--
-- TOC entry 3243 (class 0 OID 16551)
-- Dependencies: 227
-- Data for Name: GlobalModels_skills; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_skills" (id) FROM stdin;
\.


--
-- TOC entry 3245 (class 0 OID 16559)
-- Dependencies: 229
-- Data for Name: GlobalModels_tools; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."GlobalModels_tools" (id) FROM stdin;
\.


--
-- TOC entry 3247 (class 0 OID 16585)
-- Dependencies: 231
-- Data for Name: account_emailaddress; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.account_emailaddress (id, email, verified, "primary", user_id) FROM stdin;
\.


--
-- TOC entry 3249 (class 0 OID 16595)
-- Dependencies: 233
-- Data for Name: account_emailconfirmation; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.account_emailconfirmation (id, created, sent, key, email_address_id) FROM stdin;
\.


--
-- TOC entry 3229 (class 0 OID 16458)
-- Dependencies: 213
-- Data for Name: accounts_user; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.accounts_user (id, last_login, is_superuser, username, password, email, first_name, last_name, date_joined, last_logged_in, avatar, skills, work_fields, tools, company_name, "position", website, address_line, zip_code, state, country, is_active, is_available, is_designer, is_staff, is_admin) FROM stdin;
1	2021-01-18 10:24:28.833899+00	t	catadmin	pbkdf2_sha256$216000$SW7MoCijpEBt$ZzHxHxIIhR6zHaMJBbxb1fUNYk4p+ViULIwLqJtde/k=	catadmin@fram3dcat.com			2021-01-07 11:07:56.540754+00	\N	defaultPicUser.png											t	t	f	t	t
24	\N	f	companyOne	pbkdf2_sha256$216000$TDbNm3oOz71A$Yqxkk3MVYB97WhKpU9slTL3rm3GexpFEUiT4Fx0ObPE=	company1@cmail.com	 	 	2021-01-11 13:08:30.082243+00	\N	defaultPicUser.png	 	 	 	C1							t	t	f	f	f
27	\N	f	megacompany	pbkdf2_sha256$216000$zytZ0iLjzlcw$l8n3DUgyVxh578GQOvbP9z2VN/4sLr2lDE6tGpg7JOE=	mc@mc.com	 	 	2021-01-12 07:09:14.494696+00	\N	defaultPicUser.png	 	 	 								t	t	f	f	f
23	\N	f	gosho	pbkdf2_sha256$216000$ebQfQwGMOYAk$Sr7ryhAL4z/sKDiS2vOiu1cIubFzh4AHsnqDsOMREqM=	gosh@gmail.com			2021-01-11 13:07:13.641031+00	\N	QbD3lTJ.jpg											t	t	t	f	f
28	\N	f	john	pbkdf2_sha256$216000$LFWan8gsiaff$4CJIXX6UP7iiWEKQimINuJFNoHuH8OKJUWRfMZHCpfo=	john@jmail.com	John	Smithy	2021-01-19 12:11:08.653031+00	\N	default.png	TIME_MANAGEMENT	ANIMATION		ProjectBlue	animator	www.artjohhy.com/albums	gray str. 23	4000	Plovdiv	Bulgaria	t	t	t	f	f
26	\N	f	jane	pbkdf2_sha256$216000$FulFZGK2D7Pd$70bmOoQROhe3t05sDO80jlHyg4i5V7owizrFVHceRZo=	jane@jmail.com	Jane	Doe	2021-01-12 07:08:18.079958+00	\N	AjkJKrS.jpg	COMMUNICATION	TEXTURING		Project2	Lead2	www.janeart.com	green str. 24	4000	Plovdiv	Bulgaria	t	t	t	f	f
\.


--
-- TOC entry 3231 (class 0 OID 16470)
-- Dependencies: 215
-- Data for Name: accounts_user_groups; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.accounts_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- TOC entry 3233 (class 0 OID 16478)
-- Dependencies: 217
-- Data for Name: accounts_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.accounts_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- TOC entry 3225 (class 0 OID 16414)
-- Dependencies: 209
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- TOC entry 3227 (class 0 OID 16424)
-- Dependencies: 211
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- TOC entry 3223 (class 0 OID 16406)
-- Dependencies: 207
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add site	6	add_site
22	Can change site	6	change_site
23	Can delete site	6	delete_site
24	Can view site	6	view_site
25	Can add email address	7	add_emailaddress
26	Can change email address	7	change_emailaddress
27	Can delete email address	7	delete_emailaddress
28	Can view email address	7	view_emailaddress
29	Can add email confirmation	8	add_emailconfirmation
30	Can change email confirmation	8	change_emailconfirmation
31	Can delete email confirmation	8	delete_emailconfirmation
32	Can view email confirmation	8	view_emailconfirmation
33	Can add Token	9	add_token
34	Can change Token	9	change_token
35	Can delete Token	9	delete_token
36	Can view Token	9	view_token
37	Can add auth token	10	add_authtoken
38	Can change auth token	10	change_authtoken
39	Can delete auth token	10	delete_authtoken
40	Can view auth token	10	view_authtoken
41	Can add field_of_work	11	add_field_of_work
42	Can change field_of_work	11	change_field_of_work
43	Can delete field_of_work	11	delete_field_of_work
44	Can view field_of_work	11	view_field_of_work
45	Can add frame	12	add_frame
46	Can change frame	12	change_frame
47	Can delete frame	12	delete_frame
48	Can view frame	12	view_frame
49	Can add frame_comment	13	add_frame_comment
50	Can change frame_comment	13	change_frame_comment
51	Can delete frame_comment	13	delete_frame_comment
52	Can view frame_comment	13	view_frame_comment
53	Can add location	14	add_location
54	Can change location	14	change_location
55	Can delete location	14	delete_location
56	Can view location	14	view_location
57	Can add skills	15	add_skills
58	Can change skills	15	change_skills
59	Can delete skills	15	delete_skills
60	Can view skills	15	view_skills
61	Can add tools	16	add_tools
62	Can change tools	16	change_tools
63	Can delete tools	16	delete_tools
64	Can view tools	16	view_tools
65	Can add job	17	add_job
66	Can change job	17	change_job
67	Can delete job	17	delete_job
68	Can view job	17	view_job
69	Can add job_comment	18	add_job_comment
70	Can change job_comment	18	change_job_comment
71	Can delete job_comment	18	delete_job_comment
72	Can view job_comment	18	view_job_comment
73	Can add user	19	add_user
74	Can change user	19	change_user
75	Can delete user	19	delete_user
76	Can view user	19	view_user
77	Can add story	20	add_story
78	Can change story	20	change_story
79	Can delete story	20	delete_story
80	Can view story	20	view_story
81	Can add comment	21	add_comment
82	Can change comment	21	change_comment
83	Can delete comment	21	delete_comment
84	Can view comment	21	view_comment
\.


--
-- TOC entry 3252 (class 0 OID 16644)
-- Dependencies: 236
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.authtoken_token (key, created, user_id) FROM stdin;
\.


--
-- TOC entry 3256 (class 0 OID 16675)
-- Dependencies: 240
-- Data for Name: blog_comment; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.blog_comment (id, content, likes, pub_date, author_id, post_id) FROM stdin;
\.


--
-- TOC entry 3254 (class 0 OID 16664)
-- Dependencies: 238
-- Data for Name: blog_story; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.blog_story (id, headline, body_text, pub_date, mod_date, description, number_of_comments, rating, headline_photo, author_id) FROM stdin;
\.


--
-- TOC entry 3251 (class 0 OID 16622)
-- Dependencies: 235
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2021-01-11 11:49:38.087526+00	19	petur2	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
2	2021-01-11 11:49:44.236055+00	18	petur	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
3	2021-01-11 11:49:49.816481+00	17	ivan	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
4	2021-01-11 11:49:56.423934+00	16	Yoyo	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
5	2021-01-11 11:50:01.933382+00	15	Comp323	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools"]}}]	19	1
6	2021-01-11 11:50:07.895431+00	9	Comapny7	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
7	2021-01-11 11:50:14.298218+00	6	Comapny4	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
8	2021-01-11 11:50:19.979475+00	5	ComapnyTwo	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
9	2021-01-11 11:50:31.6512+00	2	john	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools"]}}]	19	1
10	2021-01-11 11:50:47.166509+00	22	Stephan	3		19	1
11	2021-01-11 11:50:47.174122+00	21	fireCompany	3		19	1
12	2021-01-11 11:50:47.179541+00	20	gosho	3		19	1
13	2021-01-11 11:50:47.184231+00	19	petur2	3		19	1
14	2021-01-11 11:50:47.189728+00	18	petur	3		19	1
15	2021-01-11 11:50:47.196475+00	17	ivan	3		19	1
16	2021-01-11 11:50:47.202046+00	16	Yoyo	3		19	1
17	2021-01-11 11:50:47.207193+00	15	Comp323	3		19	1
18	2021-01-11 11:50:47.213256+00	9	Comapny7	3		19	1
19	2021-01-11 11:50:47.219511+00	8	Comapny5	3		19	1
20	2021-01-11 11:50:47.224593+00	7	Comapny3	3		19	1
21	2021-01-11 11:50:47.229196+00	6	Comapny4	3		19	1
22	2021-01-11 11:50:47.234369+00	5	ComapnyTwo	3		19	1
23	2021-01-11 11:50:47.240375+00	4	jane	3		19	1
24	2021-01-11 11:50:47.24605+00	3	CompanyOne	3		19	1
25	2021-01-11 11:50:47.250672+00	2	john	3		19	1
26	2021-01-11 11:51:03.852602+00	1	catadmin	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer", "Is admin"]}}]	19	1
27	2021-01-12 11:13:09.59939+00	25	john	2	[{"changed": {"fields": ["First name", "Last name", "Skills", "Work fields", "Tools", "Is designer"]}}]	19	1
28	2021-01-12 12:03:35.161006+00	25	john	2	[{"changed": {"fields": ["Avatar"]}}]	19	1
29	2021-01-12 12:06:01.677967+00	1	Lamp	1	[{"added": {}}]	12	1
30	2021-01-12 12:07:41.685673+00	1	Lamp	2	[{"changed": {"fields": ["FrameFile"]}}]	12	1
31	2021-01-18 12:50:58.296226+00	1	Field_of_work object (1)	1	[{"added": {}}]	11	1
32	2021-01-18 12:51:09.461015+00	1	Field_of_work object (1)	3		11	1
33	2021-01-18 12:52:14.899127+00	26	jane	2	[{"changed": {"fields": ["Work fields"]}}]	19	1
34	2021-01-18 12:53:49.148037+00	26	jane	2	[{"changed": {"fields": ["Work fields"]}}]	19	1
35	2021-01-19 10:19:31.995431+00	23	gosho	2	[{"changed": {"fields": ["First name", "Last name", "Avatar", "Skills", "Work fields", "Tools"]}}]	19	1
36	2021-01-19 10:19:52.843375+00	23	gosho	2	[{"changed": {"fields": ["Avatar"]}}]	19	1
37	2021-01-19 10:23:03.209895+00	26	jane	2	[{"changed": {"fields": ["Skills", "Work fields"]}}]	19	1
38	2021-01-19 12:07:12.846531+00	25	john	2	[{"changed": {"fields": ["Password"]}}]	19	1
39	2021-01-19 12:10:45.682174+00	25	john	3		19	1
40	2021-01-19 12:34:49.449703+00	2	Lamp	1	[{"added": {}}]	12	1
41	2021-01-19 14:01:18.952008+00	3	MOnster	1	[{"added": {}}]	12	1
42	2021-01-19 16:58:15.608952+00	4	creative	1	[{"added": {}}]	12	1
\.


--
-- TOC entry 3221 (class 0 OID 16396)
-- Dependencies: 205
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	sites	site
7	account	emailaddress
8	account	emailconfirmation
9	authtoken	token
10	knox	authtoken
11	GlobalModels	field_of_work
12	GlobalModels	frame
13	GlobalModels	frame_comment
14	GlobalModels	location
15	GlobalModels	skills
16	GlobalModels	tools
17	jobBoard	job
18	jobBoard	job_comment
19	accounts	user
20	blog	story
21	blog	comment
\.


--
-- TOC entry 3219 (class 0 OID 16388)
-- Dependencies: 203
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2021-01-07 11:05:34.55735+00
2	contenttypes	0002_remove_content_type_name	2021-01-07 11:05:34.579988+00
3	auth	0001_initial	2021-01-07 11:05:34.625824+00
4	auth	0002_alter_permission_name_max_length	2021-01-07 11:05:34.684405+00
5	auth	0003_alter_user_email_max_length	2021-01-07 11:05:34.695578+00
6	auth	0004_alter_user_username_opts	2021-01-07 11:05:34.705918+00
7	auth	0005_alter_user_last_login_null	2021-01-07 11:05:34.717353+00
8	auth	0006_require_contenttypes_0002	2021-01-07 11:05:34.725122+00
9	auth	0007_alter_validators_add_error_messages	2021-01-07 11:05:34.734992+00
10	auth	0008_alter_user_username_max_length	2021-01-07 11:05:34.74659+00
11	auth	0009_alter_user_last_name_max_length	2021-01-07 11:05:34.7585+00
12	auth	0010_alter_group_name_max_length	2021-01-07 11:05:34.770391+00
13	auth	0011_update_proxy_permissions	2021-01-07 11:05:34.780315+00
14	auth	0012_alter_user_first_name_max_length	2021-01-07 11:05:34.790721+00
15	accounts	0001_initial	2021-01-07 11:05:34.841099+00
16	GlobalModels	0001_initial	2021-01-07 11:05:34.968263+00
17	GlobalModels	0002_auto_20210107_1105	2021-01-07 11:05:34.999078+00
18	account	0001_initial	2021-01-07 11:05:35.075793+00
19	account	0002_email_max_length	2021-01-07 11:05:35.121689+00
20	admin	0001_initial	2021-01-07 11:05:35.151424+00
21	admin	0002_logentry_remove_auto_add	2021-01-07 11:05:35.182276+00
22	admin	0003_logentry_add_action_flag_choices	2021-01-07 11:05:35.198311+00
23	authtoken	0001_initial	2021-01-07 11:05:35.227458+00
24	authtoken	0002_auto_20160226_1747	2021-01-07 11:05:35.290488+00
25	blog	0001_initial	2021-01-07 11:05:35.349666+00
26	jobBoard	0001_initial	2021-01-07 11:05:35.445549+00
27	knox	0001_initial	2021-01-07 11:05:35.5278+00
28	knox	0002_auto_20150916_1425	2021-01-07 11:05:35.578319+00
29	knox	0003_auto_20150916_1526	2021-01-07 11:05:35.642462+00
30	knox	0004_authtoken_expires	2021-01-07 11:05:35.662642+00
31	knox	0005_authtoken_token_key	2021-01-07 11:05:35.68504+00
32	knox	0006_auto_20160818_0932	2021-01-07 11:05:35.753329+00
33	knox	0007_auto_20190111_0542	2021-01-07 11:05:35.773643+00
34	sessions	0001_initial	2021-01-07 11:05:35.794126+00
35	sites	0001_initial	2021-01-07 11:05:35.822008+00
36	sites	0002_alter_domain_unique	2021-01-07 11:05:35.845372+00
37	accounts	0002_auto_20210108_1418	2021-01-08 14:18:29.239101+00
38	accounts	0003_auto_20210119_1018	2021-01-19 10:18:58.848783+00
39	accounts	0004_auto_20210120_0700	2021-01-20 07:00:39.089324+00
40	accounts	0005_auto_20210125_2111	2021-01-25 21:11:31.013301+00
\.


--
-- TOC entry 3264 (class 0 OID 16797)
-- Dependencies: 248
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
edsmz8tdqaxlzciddzklxsr3go87uc3x	.eJxVjEEOwiAQRe_C2hBhpIBL956BzDCDVA1NSrsy3l2bdKHb_977L5VwXWpau8xpZHVWRh1-N8L8kLYBvmO7TTpPbZlH0puid9r1dWJ5Xnb376Bir996GDwQeGuAi4PoTXGCuRTiGJBD8OwzA4o1gaIgYJZjzNbGgs6UE6n3B_OIONA:1kxT9H:4L08StJ_y8XOnQplzdYbS9sZbMph40z0Tz_oYJP3uQs	2021-01-21 11:08:11.239894+00
wjyjj1r3zsi8ngnrzpwlvzhyx5o9505d	.eJxVjEEOwiAQRe_C2hBhpIBL956BzDCDVA1NSrsy3l2bdKHb_977L5VwXWpau8xpZHVWRh1-N8L8kLYBvmO7TTpPbZlH0puid9r1dWJ5Xnb376Bir996GDwQeGuAi4PoTXGCuRTiGJBD8OwzA4o1gaIgYJZjzNbGgs6UE6n3B_OIONA:1l1Ri0:4dXe8liT7D_GZewxCIhlhsTfSmHkyubK7ShZ02n2Lpw	2021-02-01 10:24:28.8465+00
\.


--
-- TOC entry 3266 (class 0 OID 16809)
-- Dependencies: 250
-- Data for Name: django_site; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.django_site (id, domain, name) FROM stdin;
1	example.com	example.com
\.


--
-- TOC entry 3258 (class 0 OID 16704)
-- Dependencies: 242
-- Data for Name: jobBoard_job; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."jobBoard_job" (id, headline, description, skills, "field_Of_Work", body_text, salary, pub_date, mod_date, due_date, number_of_comments, rating, is_remote, is_active, submition_url, experience, author_id) FROM stdin;
\.


--
-- TOC entry 3262 (class 0 OID 16723)
-- Dependencies: 246
-- Data for Name: jobBoard_job_comment; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."jobBoard_job_comment" (id, content, likes, pub_date, author_id, post_id) FROM stdin;
\.


--
-- TOC entry 3260 (class 0 OID 16715)
-- Dependencies: 244
-- Data for Name: jobBoard_job_location; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public."jobBoard_job_location" (id, job_id, location_id) FROM stdin;
\.


--
-- TOC entry 3263 (class 0 OID 16776)
-- Dependencies: 247
-- Data for Name: knox_authtoken; Type: TABLE DATA; Schema: public; Owner: catadmin
--

COPY public.knox_authtoken (digest, salt, created, user_id, expiry, token_key) FROM stdin;
7776b8a215f3b93e0cd73d590b3534711cdf3895222fd892c0f089aa25e9be072797d02c3acf6d924e44c60ceeca8dc24bd9582e11166a9db5ff45467b7bb0a4	cf21e2719d7a5d79	2021-01-11 13:07:13.896892+00	23	2021-01-11 23:07:13.896588+00	0396d522
c4e4340a1fff07d86e6690e34a90ff4d55816f120336633c692e301b4d3374faf02f80b6aa052083e52eca3de8cf0af1a83fdb6e11388001281b8c51c36cb309	a687f7f3e3217957	2021-01-25 21:22:39.859117+00	26	2021-01-26 07:22:39.858605+00	780a86b9
\.


--
-- TOC entry 3295 (class 0 OID 0)
-- Dependencies: 218
-- Name: GlobalModels_field_of_work_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_field_of_work_id_seq"', 1, true);


--
-- TOC entry 3296 (class 0 OID 0)
-- Dependencies: 222
-- Name: GlobalModels_frame_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_frame_comment_id_seq"', 1, false);


--
-- TOC entry 3297 (class 0 OID 0)
-- Dependencies: 220
-- Name: GlobalModels_frame_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_frame_id_seq"', 4, true);


--
-- TOC entry 3298 (class 0 OID 0)
-- Dependencies: 224
-- Name: GlobalModels_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_location_id_seq"', 1, false);


--
-- TOC entry 3299 (class 0 OID 0)
-- Dependencies: 226
-- Name: GlobalModels_skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_skills_id_seq"', 1, false);


--
-- TOC entry 3300 (class 0 OID 0)
-- Dependencies: 228
-- Name: GlobalModels_tools_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."GlobalModels_tools_id_seq"', 1, false);


--
-- TOC entry 3301 (class 0 OID 0)
-- Dependencies: 230
-- Name: account_emailaddress_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.account_emailaddress_id_seq', 1, false);


--
-- TOC entry 3302 (class 0 OID 0)
-- Dependencies: 232
-- Name: account_emailconfirmation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.account_emailconfirmation_id_seq', 1, false);


--
-- TOC entry 3303 (class 0 OID 0)
-- Dependencies: 214
-- Name: accounts_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.accounts_user_groups_id_seq', 1, false);


--
-- TOC entry 3304 (class 0 OID 0)
-- Dependencies: 212
-- Name: accounts_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.accounts_user_id_seq', 28, true);


--
-- TOC entry 3305 (class 0 OID 0)
-- Dependencies: 216
-- Name: accounts_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.accounts_user_user_permissions_id_seq', 1, false);


--
-- TOC entry 3306 (class 0 OID 0)
-- Dependencies: 208
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- TOC entry 3307 (class 0 OID 0)
-- Dependencies: 210
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- TOC entry 3308 (class 0 OID 0)
-- Dependencies: 206
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 84, true);


--
-- TOC entry 3309 (class 0 OID 0)
-- Dependencies: 239
-- Name: blog_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.blog_comment_id_seq', 1, false);


--
-- TOC entry 3310 (class 0 OID 0)
-- Dependencies: 237
-- Name: blog_story_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.blog_story_id_seq', 1, false);


--
-- TOC entry 3311 (class 0 OID 0)
-- Dependencies: 234
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 42, true);


--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 204
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 21, true);


--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 202
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 40, true);


--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 249
-- Name: django_site_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public.django_site_id_seq', 1, true);


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 245
-- Name: jobBoard_job_comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."jobBoard_job_comment_id_seq"', 1, false);


--
-- TOC entry 3316 (class 0 OID 0)
-- Dependencies: 241
-- Name: jobBoard_job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."jobBoard_job_id_seq"', 1, false);


--
-- TOC entry 3317 (class 0 OID 0)
-- Dependencies: 243
-- Name: jobBoard_job_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: catadmin
--

SELECT pg_catalog.setval('public."jobBoard_job_location_id_seq"', 1, false);


--
-- TOC entry 2995 (class 2606 OID 16521)
-- Name: GlobalModels_field_of_work GlobalModels_field_of_work_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_field_of_work"
    ADD CONSTRAINT "GlobalModels_field_of_work_pkey" PRIMARY KEY (id);


--
-- TOC entry 3001 (class 2606 OID 16540)
-- Name: GlobalModels_frame_comment GlobalModels_frame_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame_comment"
    ADD CONSTRAINT "GlobalModels_frame_comment_pkey" PRIMARY KEY (id);


--
-- TOC entry 2998 (class 2606 OID 16529)
-- Name: GlobalModels_frame GlobalModels_frame_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame"
    ADD CONSTRAINT "GlobalModels_frame_pkey" PRIMARY KEY (id);


--
-- TOC entry 3004 (class 2606 OID 16548)
-- Name: GlobalModels_location GlobalModels_location_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_location"
    ADD CONSTRAINT "GlobalModels_location_pkey" PRIMARY KEY (id);


--
-- TOC entry 3006 (class 2606 OID 16556)
-- Name: GlobalModels_skills GlobalModels_skills_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_skills"
    ADD CONSTRAINT "GlobalModels_skills_pkey" PRIMARY KEY (id);


--
-- TOC entry 3008 (class 2606 OID 16564)
-- Name: GlobalModels_tools GlobalModels_tools_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_tools"
    ADD CONSTRAINT "GlobalModels_tools_pkey" PRIMARY KEY (id);


--
-- TOC entry 3011 (class 2606 OID 16618)
-- Name: account_emailaddress account_emailaddress_email_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailaddress
    ADD CONSTRAINT account_emailaddress_email_key UNIQUE (email);


--
-- TOC entry 3013 (class 2606 OID 16590)
-- Name: account_emailaddress account_emailaddress_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailaddress
    ADD CONSTRAINT account_emailaddress_pkey PRIMARY KEY (id);


--
-- TOC entry 3018 (class 2606 OID 16602)
-- Name: account_emailconfirmation account_emailconfirmation_key_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailconfirmation
    ADD CONSTRAINT account_emailconfirmation_key_key UNIQUE (key);


--
-- TOC entry 3020 (class 2606 OID 16600)
-- Name: account_emailconfirmation account_emailconfirmation_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailconfirmation
    ADD CONSTRAINT account_emailconfirmation_pkey PRIMARY KEY (id);


--
-- TOC entry 2976 (class 2606 OID 16467)
-- Name: accounts_user accounts_user_email_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user
    ADD CONSTRAINT accounts_user_email_key UNIQUE (email);


--
-- TOC entry 2984 (class 2606 OID 16475)
-- Name: accounts_user_groups accounts_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_pkey PRIMARY KEY (id);


--
-- TOC entry 2987 (class 2606 OID 16487)
-- Name: accounts_user_groups accounts_user_groups_user_id_group_id_59c0b32f_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_user_id_group_id_59c0b32f_uniq UNIQUE (user_id, group_id);


--
-- TOC entry 2978 (class 2606 OID 16463)
-- Name: accounts_user accounts_user_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user
    ADD CONSTRAINT accounts_user_pkey PRIMARY KEY (id);


--
-- TOC entry 2989 (class 2606 OID 16501)
-- Name: accounts_user_user_permissions accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_permi_user_id_permission_id_2ab516c2_uniq UNIQUE (user_id, permission_id);


--
-- TOC entry 2992 (class 2606 OID 16483)
-- Name: accounts_user_user_permissions accounts_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 2981 (class 2606 OID 16465)
-- Name: accounts_user accounts_user_username_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user
    ADD CONSTRAINT accounts_user_username_key UNIQUE (username);


--
-- TOC entry 2965 (class 2606 OID 16454)
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- TOC entry 2970 (class 2606 OID 16440)
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- TOC entry 2973 (class 2606 OID 16429)
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- TOC entry 2967 (class 2606 OID 16419)
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- TOC entry 2960 (class 2606 OID 16431)
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- TOC entry 2962 (class 2606 OID 16411)
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- TOC entry 3027 (class 2606 OID 16648)
-- Name: authtoken_token authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- TOC entry 3029 (class 2606 OID 16650)
-- Name: authtoken_token authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- TOC entry 3035 (class 2606 OID 16683)
-- Name: blog_comment blog_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_comment
    ADD CONSTRAINT blog_comment_pkey PRIMARY KEY (id);


--
-- TOC entry 3032 (class 2606 OID 16672)
-- Name: blog_story blog_story_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_story
    ADD CONSTRAINT blog_story_pkey PRIMARY KEY (id);


--
-- TOC entry 3023 (class 2606 OID 16631)
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- TOC entry 2955 (class 2606 OID 16403)
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- TOC entry 2957 (class 2606 OID 16401)
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2953 (class 2606 OID 16393)
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3061 (class 2606 OID 16804)
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- TOC entry 3065 (class 2606 OID 16816)
-- Name: django_site django_site_domain_a2e37b91_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_site
    ADD CONSTRAINT django_site_domain_a2e37b91_uniq UNIQUE (domain);


--
-- TOC entry 3067 (class 2606 OID 16814)
-- Name: django_site django_site_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_site
    ADD CONSTRAINT django_site_pkey PRIMARY KEY (id);


--
-- TOC entry 3048 (class 2606 OID 16731)
-- Name: jobBoard_job_comment jobBoard_job_comment_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_comment"
    ADD CONSTRAINT "jobBoard_job_comment_pkey" PRIMARY KEY (id);


--
-- TOC entry 3042 (class 2606 OID 16739)
-- Name: jobBoard_job_location jobBoard_job_location_job_id_location_id_4a44c2ba_uniq; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_location"
    ADD CONSTRAINT "jobBoard_job_location_job_id_location_id_4a44c2ba_uniq" UNIQUE (job_id, location_id);


--
-- TOC entry 3045 (class 2606 OID 16720)
-- Name: jobBoard_job_location jobBoard_job_location_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_location"
    ADD CONSTRAINT "jobBoard_job_location_pkey" PRIMARY KEY (id);


--
-- TOC entry 3039 (class 2606 OID 16712)
-- Name: jobBoard_job jobBoard_job_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job"
    ADD CONSTRAINT "jobBoard_job_pkey" PRIMARY KEY (id);


--
-- TOC entry 3052 (class 2606 OID 16792)
-- Name: knox_authtoken knox_authtoken_pkey; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.knox_authtoken
    ADD CONSTRAINT knox_authtoken_pkey PRIMARY KEY (digest);


--
-- TOC entry 3055 (class 2606 OID 16782)
-- Name: knox_authtoken knox_authtoken_salt_key; Type: CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.knox_authtoken
    ADD CONSTRAINT knox_authtoken_salt_key UNIQUE (salt);


--
-- TOC entry 2996 (class 1259 OID 16582)
-- Name: GlobalModels_frame_author_id_0a32f4bf; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "GlobalModels_frame_author_id_0a32f4bf" ON public."GlobalModels_frame" USING btree (author_id);


--
-- TOC entry 2999 (class 1259 OID 16580)
-- Name: GlobalModels_frame_comment_author_id_da01595d; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "GlobalModels_frame_comment_author_id_da01595d" ON public."GlobalModels_frame_comment" USING btree (author_id);


--
-- TOC entry 3002 (class 1259 OID 16581)
-- Name: GlobalModels_frame_comment_post_id_04c26e89; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "GlobalModels_frame_comment_post_id_04c26e89" ON public."GlobalModels_frame_comment" USING btree (post_id);


--
-- TOC entry 3009 (class 1259 OID 16619)
-- Name: account_emailaddress_email_03be32b2_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX account_emailaddress_email_03be32b2_like ON public.account_emailaddress USING btree (email varchar_pattern_ops);


--
-- TOC entry 3014 (class 1259 OID 16609)
-- Name: account_emailaddress_user_id_2c513194; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX account_emailaddress_user_id_2c513194 ON public.account_emailaddress USING btree (user_id);


--
-- TOC entry 3015 (class 1259 OID 16616)
-- Name: account_emailconfirmation_email_address_id_5b7f8c58; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX account_emailconfirmation_email_address_id_5b7f8c58 ON public.account_emailconfirmation USING btree (email_address_id);


--
-- TOC entry 3016 (class 1259 OID 16615)
-- Name: account_emailconfirmation_key_f43612bd_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX account_emailconfirmation_key_f43612bd_like ON public.account_emailconfirmation USING btree (key varchar_pattern_ops);


--
-- TOC entry 2974 (class 1259 OID 16485)
-- Name: accounts_user_email_b2644a56_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_email_b2644a56_like ON public.accounts_user USING btree (email varchar_pattern_ops);


--
-- TOC entry 2982 (class 1259 OID 16499)
-- Name: accounts_user_groups_group_id_bd11a704; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_groups_group_id_bd11a704 ON public.accounts_user_groups USING btree (group_id);


--
-- TOC entry 2985 (class 1259 OID 16498)
-- Name: accounts_user_groups_user_id_52b62117; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_groups_user_id_52b62117 ON public.accounts_user_groups USING btree (user_id);


--
-- TOC entry 2990 (class 1259 OID 16513)
-- Name: accounts_user_user_permissions_permission_id_113bb443; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_user_permissions_permission_id_113bb443 ON public.accounts_user_user_permissions USING btree (permission_id);


--
-- TOC entry 2993 (class 1259 OID 16512)
-- Name: accounts_user_user_permissions_user_id_e4f0a161; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_user_permissions_user_id_e4f0a161 ON public.accounts_user_user_permissions USING btree (user_id);


--
-- TOC entry 2979 (class 1259 OID 16484)
-- Name: accounts_user_username_6088629e_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX accounts_user_username_6088629e_like ON public.accounts_user USING btree (username varchar_pattern_ops);


--
-- TOC entry 2963 (class 1259 OID 16455)
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- TOC entry 2968 (class 1259 OID 16451)
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- TOC entry 2971 (class 1259 OID 16452)
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- TOC entry 2958 (class 1259 OID 16437)
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- TOC entry 3025 (class 1259 OID 16656)
-- Name: authtoken_token_key_10f0b77e_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);


--
-- TOC entry 3033 (class 1259 OID 16700)
-- Name: blog_comment_author_id_4f11e2e0; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX blog_comment_author_id_4f11e2e0 ON public.blog_comment USING btree (author_id);


--
-- TOC entry 3036 (class 1259 OID 16701)
-- Name: blog_comment_post_id_580e96ef; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX blog_comment_post_id_580e96ef ON public.blog_comment USING btree (post_id);


--
-- TOC entry 3030 (class 1259 OID 16689)
-- Name: blog_story_author_id_fbd10acc; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX blog_story_author_id_fbd10acc ON public.blog_story USING btree (author_id);


--
-- TOC entry 3021 (class 1259 OID 16642)
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- TOC entry 3024 (class 1259 OID 16643)
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- TOC entry 3059 (class 1259 OID 16806)
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- TOC entry 3062 (class 1259 OID 16805)
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- TOC entry 3063 (class 1259 OID 16817)
-- Name: django_site_domain_a2e37b91_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX django_site_domain_a2e37b91_like ON public.django_site USING btree (domain varchar_pattern_ops);


--
-- TOC entry 3037 (class 1259 OID 16737)
-- Name: jobBoard_job_author_id_0a742c53; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "jobBoard_job_author_id_0a742c53" ON public."jobBoard_job" USING btree (author_id);


--
-- TOC entry 3046 (class 1259 OID 16762)
-- Name: jobBoard_job_comment_author_id_fb84e7c8; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "jobBoard_job_comment_author_id_fb84e7c8" ON public."jobBoard_job_comment" USING btree (author_id);


--
-- TOC entry 3049 (class 1259 OID 16763)
-- Name: jobBoard_job_comment_post_id_ac25b352; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "jobBoard_job_comment_post_id_ac25b352" ON public."jobBoard_job_comment" USING btree (post_id);


--
-- TOC entry 3040 (class 1259 OID 16750)
-- Name: jobBoard_job_location_job_id_7328bae7; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "jobBoard_job_location_job_id_7328bae7" ON public."jobBoard_job_location" USING btree (job_id);


--
-- TOC entry 3043 (class 1259 OID 16751)
-- Name: jobBoard_job_location_location_id_ceae9732; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX "jobBoard_job_location_location_id_ceae9732" ON public."jobBoard_job_location" USING btree (location_id);


--
-- TOC entry 3050 (class 1259 OID 16793)
-- Name: knox_authtoken_digest_188c7e77_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX knox_authtoken_digest_188c7e77_like ON public.knox_authtoken USING btree (digest varchar_pattern_ops);


--
-- TOC entry 3053 (class 1259 OID 16789)
-- Name: knox_authtoken_salt_3d9f48ac_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX knox_authtoken_salt_3d9f48ac_like ON public.knox_authtoken USING btree (salt varchar_pattern_ops);


--
-- TOC entry 3056 (class 1259 OID 16794)
-- Name: knox_authtoken_token_key_8f4f7d47; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX knox_authtoken_token_key_8f4f7d47 ON public.knox_authtoken USING btree (token_key);


--
-- TOC entry 3057 (class 1259 OID 16795)
-- Name: knox_authtoken_token_key_8f4f7d47_like; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX knox_authtoken_token_key_8f4f7d47_like ON public.knox_authtoken USING btree (token_key varchar_pattern_ops);


--
-- TOC entry 3058 (class 1259 OID 16790)
-- Name: knox_authtoken_user_id_e5a5d899; Type: INDEX; Schema: public; Owner: catadmin
--

CREATE INDEX knox_authtoken_user_id_e5a5d899 ON public.knox_authtoken USING btree (user_id);


--
-- TOC entry 3075 (class 2606 OID 16575)
-- Name: GlobalModels_frame GlobalModels_frame_author_id_0a32f4bf_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame"
    ADD CONSTRAINT "GlobalModels_frame_author_id_0a32f4bf_fk_accounts_user_id" FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3076 (class 2606 OID 16565)
-- Name: GlobalModels_frame_comment GlobalModels_frame_c_author_id_da01595d_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame_comment"
    ADD CONSTRAINT "GlobalModels_frame_c_author_id_da01595d_fk_accounts_" FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3077 (class 2606 OID 16570)
-- Name: GlobalModels_frame_comment GlobalModels_frame_c_post_id_04c26e89_fk_GlobalMod; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."GlobalModels_frame_comment"
    ADD CONSTRAINT "GlobalModels_frame_c_post_id_04c26e89_fk_GlobalMod" FOREIGN KEY (post_id) REFERENCES public."GlobalModels_frame"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3078 (class 2606 OID 16603)
-- Name: account_emailaddress account_emailaddress_user_id_2c513194_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailaddress
    ADD CONSTRAINT account_emailaddress_user_id_2c513194_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3079 (class 2606 OID 16610)
-- Name: account_emailconfirmation account_emailconfirm_email_address_id_5b7f8c58_fk_account_e; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.account_emailconfirmation
    ADD CONSTRAINT account_emailconfirm_email_address_id_5b7f8c58_fk_account_e FOREIGN KEY (email_address_id) REFERENCES public.account_emailaddress(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3072 (class 2606 OID 16493)
-- Name: accounts_user_groups accounts_user_groups_group_id_bd11a704_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_group_id_bd11a704_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3071 (class 2606 OID 16488)
-- Name: accounts_user_groups accounts_user_groups_user_id_52b62117_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_groups
    ADD CONSTRAINT accounts_user_groups_user_id_52b62117_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3074 (class 2606 OID 16507)
-- Name: accounts_user_user_permissions accounts_user_user_p_permission_id_113bb443_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_p_permission_id_113bb443_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3073 (class 2606 OID 16502)
-- Name: accounts_user_user_permissions accounts_user_user_p_user_id_e4f0a161_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.accounts_user_user_permissions
    ADD CONSTRAINT accounts_user_user_p_user_id_e4f0a161_fk_accounts_ FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3070 (class 2606 OID 16446)
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3069 (class 2606 OID 16441)
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3068 (class 2606 OID 16432)
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3082 (class 2606 OID 16657)
-- Name: authtoken_token authtoken_token_user_id_35299eff_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3084 (class 2606 OID 16690)
-- Name: blog_comment blog_comment_author_id_4f11e2e0_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_comment
    ADD CONSTRAINT blog_comment_author_id_4f11e2e0_fk_accounts_user_id FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3085 (class 2606 OID 16695)
-- Name: blog_comment blog_comment_post_id_580e96ef_fk_blog_story_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_comment
    ADD CONSTRAINT blog_comment_post_id_580e96ef_fk_blog_story_id FOREIGN KEY (post_id) REFERENCES public.blog_story(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3083 (class 2606 OID 16684)
-- Name: blog_story blog_story_author_id_fbd10acc_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.blog_story
    ADD CONSTRAINT blog_story_author_id_fbd10acc_fk_accounts_user_id FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3080 (class 2606 OID 16632)
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3081 (class 2606 OID 16637)
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3086 (class 2606 OID 16732)
-- Name: jobBoard_job jobBoard_job_author_id_0a742c53_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job"
    ADD CONSTRAINT "jobBoard_job_author_id_0a742c53_fk_accounts_user_id" FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3089 (class 2606 OID 16752)
-- Name: jobBoard_job_comment jobBoard_job_comment_author_id_fb84e7c8_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_comment"
    ADD CONSTRAINT "jobBoard_job_comment_author_id_fb84e7c8_fk_accounts_user_id" FOREIGN KEY (author_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3090 (class 2606 OID 16757)
-- Name: jobBoard_job_comment jobBoard_job_comment_post_id_ac25b352_fk_jobBoard_job_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_comment"
    ADD CONSTRAINT "jobBoard_job_comment_post_id_ac25b352_fk_jobBoard_job_id" FOREIGN KEY (post_id) REFERENCES public."jobBoard_job"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3088 (class 2606 OID 16745)
-- Name: jobBoard_job_location jobBoard_job_locatio_location_id_ceae9732_fk_GlobalMod; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_location"
    ADD CONSTRAINT "jobBoard_job_locatio_location_id_ceae9732_fk_GlobalMod" FOREIGN KEY (location_id) REFERENCES public."GlobalModels_location"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3087 (class 2606 OID 16740)
-- Name: jobBoard_job_location jobBoard_job_location_job_id_7328bae7_fk_jobBoard_job_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public."jobBoard_job_location"
    ADD CONSTRAINT "jobBoard_job_location_job_id_7328bae7_fk_jobBoard_job_id" FOREIGN KEY (job_id) REFERENCES public."jobBoard_job"(id) DEFERRABLE INITIALLY DEFERRED;


--
-- TOC entry 3091 (class 2606 OID 16783)
-- Name: knox_authtoken knox_authtoken_user_id_e5a5d899_fk_accounts_user_id; Type: FK CONSTRAINT; Schema: public; Owner: catadmin
--

ALTER TABLE ONLY public.knox_authtoken
    ADD CONSTRAINT knox_authtoken_user_id_e5a5d899_fk_accounts_user_id FOREIGN KEY (user_id) REFERENCES public.accounts_user(id) DEFERRABLE INITIALLY DEFERRED;


-- Completed on 2021-02-01 13:56:21

--
-- PostgreSQL database dump complete
--

